import { useMemo, useState } from "react";
import { Button } from "rsuite";
import { AiOutlinePlus } from "react-icons/ai";

import * as S from "./styles";

const SubTask = (): JSX.Element => {
  const [showSubtasksController, setShowSubtasksController] =
    useState<boolean>(false);

  const [subtaskNumber, setSubtaskNumber] = useState<string>("");
  const [subtaskName, setSubtaskName] = useState<string>("");

  const buttonIsValid = useMemo((): boolean => {
    return !subtaskNumber || !subtaskName;
  }, [subtaskName, subtaskNumber]);

  const handleUpdateControllerVier = (): void => {
    setShowSubtasksController((prev) => !prev);

    if (showSubtasksController) {
      setSubtaskName("");
      setSubtaskNumber("");
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>SubTasks</S.Title>
        <S.Button onClick={handleUpdateControllerVier}>
          <AiOutlinePlus size={18} />
        </S.Button>
      </S.Header>

      {showSubtasksController && (
        <>
          <S.SubtaskController>
            <S.SubtaskInput
              placeholder="SQUAD0-000"
              onChange={(event): void => setSubtaskNumber(event.target.value)}
            />
            <S.SubtaskInput
              placeholder="O que precisa ser feito?"
              onChange={(event): void => setSubtaskName(event.target.value)}
            />
          </S.SubtaskController>
          <S.ButtonWrapper>
            <Button type="submit" appearance="primary" disabled={buttonIsValid}>
              Salvar
            </Button>
            <Button type="reset">Cancelar</Button>
          </S.ButtonWrapper>
        </>
      )}
    </S.Container>
  );
};

export default SubTask;
