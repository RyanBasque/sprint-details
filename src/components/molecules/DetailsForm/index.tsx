/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, Button, DatePicker } from "rsuite";
import { useFormik } from "formik";

import { setData } from "services/setData";

import { useAuth } from "context/AuthContext";

import { useGetData } from "hooks/useGetData";
import { useToast } from "hooks/useToast";

import { parseDate } from "utils/parseDate";

import { CardType } from "models/card";

import * as S from "./styles";

const DetailsForm = (): JSX.Element => {
  const { sprintId, cardId } = useParams();
  const { user } = useAuth();
  const { showToast } = useToast();
  const { getData } = useGetData();

  const [cardDetails, setCardDetails] = useState<CardType>({} as CardType);
  const [sprintName, setSprintName] = useState<string>();

  const formik = useFormik<CardType>({
    enableReinitialize: true,
    initialValues: {
      name: cardDetails?.name || "",
      dateCreated: cardDetails?.dateCreated || "",
      number: cardDetails?.number || "",
      timeEstimate: cardDetails?.timeEstimate || "",
      conclusionDate: cardDetails?.conclusionDate || String(new Date()),
      description: cardDetails?.description || "",
    },
    onSubmit: (values): void => {
      setData(`users/${user?.id}/sprints/${sprintId}/cards/${cardId}`, values);
      showToast({
        type: "success",
        message: "Alterações salvas",
      });
    },
  });

  const handleChangeDate = (date: Date | null): void => {
    formik.setFieldValue("conclusionDate", date?.toString());
  };

  useEffect(() => {
    getData(
      `users/${user?.id}/sprints/${sprintId}/cards/${cardId}`,
      (snapshot) => {
        setCardDetails(snapshot.val());
      }
    );

    getData(`users/${user?.id}/sprints/${sprintId}`, (snapshot) => {
      setSprintName(snapshot.val().name);
    });
  }, [cardId]);

  useEffect(() => {
    const textarea = document.getElementById("description");

    if (textarea) textarea.style.height = `${textarea.scrollHeight}px`;
  }, [formik.values.description]);

  return (
    <S.Container>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Header>
          <S.BreadcrumbsContainer>
            <Breadcrumb>
              <Breadcrumb.Item>{sprintName}</Breadcrumb.Item>
              <Breadcrumb.Item active>{cardDetails?.number}</Breadcrumb.Item>
            </Breadcrumb>
          </S.BreadcrumbsContainer>
          <S.Name>
            <S.ReactiveInput
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </S.Name>
          <S.SubHeader>
            <p>Data prevista de conclusão:</p>
            <DatePicker
              name="conclusionDate"
              id="conclusionDate"
              value={parseDate(formik.values.conclusionDate)}
              onChange={(value): void => handleChangeDate(value)}
            />
          </S.SubHeader>
        </S.Header>
        <S.Body>
          <S.SubTitle>Descrição</S.SubTitle>
          <S.Wrapper>
            <S.ReactiveTextarea
              placeholder="Escreva sua descrição"
              name="description"
              id="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </S.Wrapper>
        </S.Body>
        <S.ButtonWrapper>
          <Button type="submit" appearance="primary">
            Salvar
          </Button>
          <Button
            type="reset"
            onClick={(): void => {
              formik.resetForm();
            }}
          >
            Cancelar
          </Button>
        </S.ButtonWrapper>
      </S.Form>
    </S.Container>
  );
};

export default DetailsForm;
