/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, Button, DatePicker } from "rsuite";
import { useFormik } from "formik";

import { useAuth } from "context/AuthContext";

import { useGetData } from "hooks/useGetData";

import { CardType } from "models/card";

import * as S from "./styles";
import { parseDate } from "utils/parseDate";

const Details = (): JSX.Element => {
  const { sprintId, cardId } = useParams();
  const { user } = useAuth();
  const { getData } = useGetData();

  const [cardDetails, setCardDetails] = useState<CardType>({} as CardType);
  const [sprintName, setSprintName] = useState<string>();

  const formik = useFormik<CardType>({
    enableReinitialize: true,
    initialValues: {
      name: cardDetails?.name,
      dateCreated: cardDetails?.dateCreated,
      number: cardDetails?.number,
      timeEstimate: cardDetails?.timeEstimate,
      conclusionDate: cardDetails?.conclusionDate,
    },
    onSubmit: (values): void => {
      console.log(values);
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
            <p>Data de conclusão:</p>
            <DatePicker
              name="conclusionDate"
              id="conclusionDate"
              value={parseDate(formik.values.conclusionDate)}
              onChange={(value): void => handleChangeDate(value)}
            />
          </S.SubHeader>
        </S.Header>
        <S.Body></S.Body>
        <Button type="submit">Save</Button>
      </S.Form>
    </S.Container>
  );
};

export default Details;
