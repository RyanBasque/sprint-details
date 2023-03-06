import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

import SubtaskController from "components/molecules/SubtaskController";

import { SubTaskType } from "./types";
import * as S from "./styles";

const SubTask = ({ subtasks }: SubTaskType): JSX.Element | null => {
  const { sprintId, cardId, subtaskId } = useParams();
  const navigate = useNavigate();

  const [showSubtasksController, setShowSubtasksController] =
    useState<boolean>(false);

  const handleUpdateControllerVier = (): void => {
    setShowSubtasksController((prev) => !prev);
  };

  useEffect(() => {
    setShowSubtasksController(false);
  }, [cardId, sprintId, subtaskId]);

  if (subtaskId) return null;
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
