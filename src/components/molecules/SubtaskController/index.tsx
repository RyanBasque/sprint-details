import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "rsuite";

import { postData } from "services/postData";

import { useAuth } from "context/AuthContext";

import { useToast } from "hooks/useToast";

import { CardType } from "models/card";

import { SubtaskControllerProps } from "./types";
import * as S from "./styles";

const SubtaskController = ({
  showSubtasksController,
  onCancel,
}: SubtaskControllerProps): JSX.Element => {
  const { sprintId, cardId, subtaskId } = useParams();
  const { showToast } = useToast();

  const { user } = useAuth();

  const [subtaskName, setSubtaskName] = useState<string>("");
  const [subtaskNumber, setSubtaskNumber] = useState<string>("");

  const handleCreateSubtask = (): void => {
    const values: CardType = {
      name: subtaskName,
      number: subtaskNumber,
      dateCreated: String(new Date()),
    };

    postData(
      `users/${user?.id}/sprints/${sprintId}/cards/${cardId}/subtasks`,
      values
    );

    setSubtaskNumber("");
    setSubtaskName("");

    showToast({
      type: "success",
      message: "Card criado com sucesso",
    });
  };

  const buttonIsValid = useMemo((): boolean => {
    return !subtaskNumber || !subtaskName;
  }, [subtaskName, subtaskNumber]);

  useEffect(() => {
    setSubtaskNumber("");
    setSubtaskName("");
  }, [cardId, sprintId, subtaskId]);

  return (
    <>
      {showSubtasksController && (
        <>
          <S.SubtaskController>
            <S.SubtaskInput
              placeholder="SQUAD0-000"
              value={subtaskNumber}
              onChange={(event): void => setSubtaskNumber(event.target.value)}
            />
            <S.SubtaskInput
              placeholder="O que precisa ser feito?"
              value={subtaskName}
              onChange={(event): void => setSubtaskName(event.target.value)}
            />
          </S.SubtaskController>
          <S.ButtonWrapper>
            <Button
              type="submit"
              appearance="primary"
              disabled={buttonIsValid}
              onClick={(): void => handleCreateSubtask()}
            >
              Salvar
            </Button>
            <Button
              type="reset"
              onClick={(): void => {
                onCancel();

                if (showSubtasksController) {
                  setSubtaskName("");
                  setSubtaskNumber("");
                }
              }}
            >
              Cancelar
            </Button>
          </S.ButtonWrapper>
        </>
      )}
    </>
  );
};

export default SubtaskController;
