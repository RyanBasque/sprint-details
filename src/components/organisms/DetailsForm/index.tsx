/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Breadcrumb, Button, DatePicker } from "rsuite";
import { useFormik } from "formik";

import { useSetData } from "requests/mutations/useSetData";

import { useToast } from "hooks/useToast";

import { parseDate } from "utils/parseDate";

import { CardType } from "models/card";

import { DetailsFormType } from "./types";
import * as S from "./styles";

const DetailsForm = ({
  card,
  cardNumber,
  sprintName,
}: DetailsFormType): JSX.Element => {
  const navigate = useNavigate();
  const { sprintId, cardId, subtaskId } = useParams();

  const { showToast } = useToast();
  const { setData } = useSetData();

  const formik = useFormik<CardType>({
    initialValues: {
      name: "",
      dateCreated: "",
      number: "",
      timeEstimate: "",
      conclusionDate: "",
      description: "",
    },
    onSubmit: (values): void => {
      let path = `sprints/${sprintId}/cards/${cardId}`;
      if (subtaskId) {
        path += `/subtasks/${subtaskId}`;
      }

      const mappedValues: CardType = {
        name: values.name,
        dateCreated: values.dateCreated,
        number: values.number,
        timeEstimate: values.timeEstimate,
        conclusionDate: values.conclusionDate,
        description: values.description,
      };

      if (values.subtasks) {
        mappedValues.subtasks = values.subtasks;
      }

      setData(path, mappedValues);

      showToast({
        type: "success",
        message: "Alterações salvas",
      });
    },
  });

  const handleChangeDate = (date: Date | null): void => {
    formik.setFieldValue("conclusionDate", date?.toString());
  };

  const handleChangeTextareaHeight = (): void => {
    const element = document.querySelector<HTMLElement>("[data-autoresize]");

    if (element) {
      const offset = element.offsetHeight - element.clientHeight;

      element.style.height = "auto";
      element.style.height = element.scrollHeight + offset + "px";
    }
  };

  useEffect(() => {
    formik.setValues({
      ...formik.initialValues,
      ...card,
    });
  }, [card]);

  useEffect(() => {
    handleChangeTextareaHeight();
  }, [card, formik.values.description]);

  return (
    <S.Container>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Header>
          <S.BreadcrumbsContainer>
            <Breadcrumb>
              <Breadcrumb.Item>{sprintName}</Breadcrumb.Item>
              <Breadcrumb.Item
                active={!subtaskId}
                style={{ cursor: "pointer" }}
                onClick={(): void => navigate(`/browse/${sprintId}/${cardId}`)}
              >
                {cardNumber || formik.values?.number}
              </Breadcrumb.Item>
              {subtaskId && (
                <Breadcrumb.Item active>
                  {formik.values?.number}
                </Breadcrumb.Item>
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
              data-autoresize
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
