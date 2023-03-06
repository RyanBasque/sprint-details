import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailsForm from "components/organisms/DetailsForm";
import SubTask from "components/organisms/SubTask";

import { translateObject } from "utils/translateObject";

import { useGetData } from "requests/queries/useGetData";

import { CardType } from "models/card";
import * as S from "./styles";

const Details = (): JSX.Element => {
  const { sprintId, cardId, subtaskId } = useParams();
  const { getData } = useGetData();

  const [card, setCard] = useState<CardType>({} as CardType);
  const [subtasks, setSubtasks] = useState<CardType[]>([]);
  const [cardNumber, setNumber] = useState<string>("");
  const [sprintName, setSprintName] = useState<string>("");

  const getTask = (): void => {
    let path = `sprints/${sprintId}/cards/${cardId}`;

    if (subtaskId) {
      path += `/subtasks/${subtaskId}`;
    }

    getData(
      path,
      (snapshot) => {
        const value = snapshot.val();

        document.title = `[${value.number}] - ${value.name}`;

        setCard(value);
      },
      false,
      true
    );
  };

  const getTaskNumber = (): void => {
    const path = `sprints/${sprintId}/cards/${cardId}`;

    if (subtaskId) {
      getData(path, (snapshot) => {
        const number = snapshot.val().number;

        setNumber(number);
      });

      return;
    }

    setNumber("");
  };

  const getSprintName = (): void => {
    getData(`sprints/${sprintId}`, (snapshot) => {
      if (snapshot.exists()) {
        setSprintName(snapshot.val().name);
      }
    });
  };

  const getSubtasks = (): void => {
    getData(`sprints/${sprintId}/cards/${cardId}/subtasks`, (snapshot) => {
      const value = translateObject<CardType>(snapshot.val());
      setSubtasks(value);
    });
  };

  useEffect(() => {
    getTask();
    getTaskNumber();
    getSprintName();
    getSubtasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardId, subtaskId]);

  return (
    <S.Container>
      <DetailsForm
        card={card}
        cardNumber={cardNumber}
        sprintName={sprintName}
      />
      <SubTask subtasks={subtasks} />
    </S.Container>
  );
};

export default Details;
