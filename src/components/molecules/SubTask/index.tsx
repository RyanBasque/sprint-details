import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import SubtaskController from "../SubtaskController";

import { useAuth } from "context/AuthContext";

import { useGetData } from "hooks/useGetData";

import { translateObject } from "utils/translateObject";

import { CardType } from "models/card";
import * as S from "./styles";

type SubTaskProps = {
  hasSubtask: boolean;
};

const SubTask = ({ hasSubtask }: SubTaskProps): JSX.Element | null => {
  const { sprintId, cardId } = useParams();
  const { user } = useAuth();
  const { getData } = useGetData();
  const navigate = useNavigate();

  const [subtasks, setSubtasks] = useState<CardType[]>([]);
  const [showSubtasksController, setShowSubtasksController] =
    useState<boolean>(false);

  const handleUpdateControllerVier = (): void => {
    setShowSubtasksController((prev) => !prev);
  };

  useEffect(() => {
    setShowSubtasksController(false);

    getData(`sprints/${sprintId}/cards/subtasks`, (snapshot) => {
      const value = translateObject<CardType>(snapshot.val());
      setSubtasks(value);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardId, sprintId]);

  if (hasSubtask) return null;
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
            element.subtasks?.length ? (
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
            ) : null
          )}
      </S.SubtaskContainer>
    </S.Container>
  );
};

export default SubTask;
