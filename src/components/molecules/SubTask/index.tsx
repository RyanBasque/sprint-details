import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import SubtaskController from "../SubtaskController";

import { useAuth } from "context/AuthContext";

import { useGetData } from "hooks/useGetData";

import { translateObject } from "utils/translateObject";

import { CardType } from "models/card";
import * as S from "./styles";

const SubTask = (): JSX.Element => {
  const { sprintId, cardId } = useParams();
  const { getData } = useGetData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [subtasks, setSubtasks] = useState<CardType[]>([]);
  const [hasSubtask, setHasSubtask] = useState<boolean>(false);
  const [showSubtasksController, setShowSubtasksController] =
    useState<boolean>(false);

  const handleUpdateControllerVier = (): void => {
    setShowSubtasksController((prev) => !prev);
  };

  useEffect(() => {
    getData(`users/${user?.id}/sprints/${sprintId}/cards`, (snapshot) => {
      const value = translateObject<CardType>(snapshot.val());
      setSubtasks(value);
    });

    getData(
      `users/${user?.id}/sprints/${sprintId}/cards/${cardId}`,
      (snapshot) => {
        const isSubtask = snapshot.val();
        setHasSubtask(!!isSubtask.linkedCardIfIsSubtask);
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardId, sprintId]);

  if (hasSubtask) return <></>;
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
        {subtasks.length &&
          subtasks.map((element) =>
            element.linkedCardIfIsSubtask === cardId ? (
              <S.Subtask
                key={element.id}
                onClick={(): void =>
                  navigate(`/browse/${sprintId}/${element.id}`, {
                    replace: true,
                  })
                }
              >
                <S.SubtaskNumber>{element.number}</S.SubtaskNumber>
                <S.SubtaskName>{element.name}</S.SubtaskName>
              </S.Subtask>
            ) : null
          )}
      </S.SubtaskContainer>
    </S.Container>
  );
};

export default SubTask;
