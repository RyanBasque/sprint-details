/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Breadcrumb, Button, DatePicker } from "rsuite";
import { useFormik } from "formik";

import { useSetData } from "requests/mutations/useSetData";
import { useGetData } from "requests/queries/useGetData";

import { useToast } from "hooks/useToast";

import { parseDate } from "utils/parseDate";

import { CardType } from "models/card";

import * as S from "./styles";

const DetailsForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { sprintId, cardId, subtaskId } = useParams();
  const { showToast } = useToast();
  const { getData } = useGetData();
  const { setData } = useSetData();

  const [cardDetails, setCardDetails] = useState<CardType>({} as CardType);
  const [sprintName, setSprintName] = useState<string>();

  const formik = useFormik<CardType>({
    enableReinitialize: true,
    initialValues: {
      name: cardDetails?.name || "",
      dateCreated: cardDetails?.dateCreated || "",
      number: cardDetails?.number || "",
      timeEstimate: cardDetails?.timeEstimate || "",
      conclusionDate: cardDetails?.conclusionDate || "",
      description: cardDetails?.description || "",
      subtasks: cardDetails?.subtasks,
    },
    onSubmit: (values): void => {
      let path = `sprints/${sprintId}/cards/${cardId}`;
      if (subtaskId) {
        path += `/subtasks/${subtaskId}`;
      }
      setData(path, values);

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
    let path = `sprints/${sprintId}/cards/${cardId}`;

    if (subtaskId) {
      path = `sprints/${sprintId}/cards/${cardId}/subtasks/${subtaskId}`;
    }

    getData(path, (snapshot) => {
      const value = snapshot.val();

      setCardDetails(value);
    });

    getData(`sprints/${sprintId}`, (snapshot) => {
      if (snapshot.exists()) {
        setSprintName(snapshot.val().name);
      }
    });
  }, [cardId, subtaskId]);

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
              <Breadcrumb.Item
                active={!subtaskId}
                onClick={(): void => navigate(`/browse/${sprintId}/${cardId}`)}
                style={{ cursor: "pointer" }}
              >
                {cardDetails?.number}
              </Breadcrumb.Item>
              {subtaskId && (
                <Breadcrumb.Item active>{cardDetails?.number}</Breadcrumb.Item>
              )}
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
