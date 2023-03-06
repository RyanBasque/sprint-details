import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import SubtaskController from "components/molecules/SubtaskController";

import { useGetData } from "requests/queries/useGetData";

import { translateObject } from "utils/translateObject";

import { CardType } from "models/card";
import * as S from "./styles";

const SubTask = (): JSX.Element | null => {
  const { sprintId, cardId, subtaskId } = useParams();
  const { getData } = useGetData();
  const navigate = useNavigate();

  const hasSubtaskId = !!subtaskId;

  const [subtasks, setSubtasks] = useState<CardType[]>([]);
  const [showSubtasksController, setShowSubtasksController] =
    useState<boolean>(false);

  const handleUpdateControllerVier = (): void => {
    setShowSubtasksController((prev) => !prev);
  };

  useEffect(() => {
    getData(`sprints/${sprintId}/cards/${cardId}/subtasks`, (snapshot) => {
      const value = translateObject<CardType>(snapshot.val());
      setSubtasks(value);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardId, sprintId]);

  useEffect(() => {
    setShowSubtasksController(false);
  }, [cardId, sprintId, subtaskId]);

  if (hasSubtaskId) return null;
  return (
    <S.Container>
      <S.Header>
        <S.Title>SubTasks</S.Title>
        <S.Button onClick={handleUpdateControllerVier}>
          <AiOutlinePlus size={18} />
        </S.Button>
      </S.Header>
      <SubtaskController
        showSubtasksController={showSubtasksController}
        onCancel={handleUpdateControllerVier}
      />

      <S.SubtaskContainer>
        {subtasks.length
          ? subtasks.map((element) => (
              <S.Subtask
                key={element.id}
                onClick={(): void =>
                  navigate(`/browse/${sprintId}/${cardId}/${element.id}`, {
                    replace: true,
                  })
                }
              >
                <S.SubtaskNumber>{element.number}</S.SubtaskNumber>
                <S.SubtaskName>{element.name}</S.SubtaskName>
              </S.Subtask>
            ))
          : null}
      </S.SubtaskContainer>
    </S.Container>
  );
};

export default SubTask;
