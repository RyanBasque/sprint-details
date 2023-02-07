import { useState } from "react";
import { Button, Input, Modal, DateRangePicker } from "rsuite";

import { useToast } from "hooks/useToast";

import { atLeastOneFieldFilled } from "utils/atLeastOneFieldFilled";

import { CreateSprintType } from "models/createSprint";

import { CreateSprintModalProps } from "./types";

import * as S from "./styles";

type RangeType = {
  dateCreated: Date;
  dateInit: Date;
  dateEnd: Date;
};

const CreateSprintModal = ({
  showModal,
  onClose,
  onClick,
}: CreateSprintModalProps): JSX.Element => {
  const { showToast } = useToast();
  const [name, setName] = useState<string>("");
  const [range, setRange] = useState<RangeType>({} as RangeType);

  const validateValues = (): void => {
    const sprintValues: CreateSprintType = {
      name,
      dateCreated: range.dateCreated.toString(),
      dateInit: range.dateInit.toString(),
      dateEnd: range.dateEnd.toString(),
    };

    const hasFullFilled = atLeastOneFieldFilled(sprintValues);

    if (!hasFullFilled) {
      showToast({
        type: "error",
        message: "Preencha todos os campos para continuar",
      });

      return;
    }

    onClick(sprintValues);
  };

  return (
    <Modal open={showModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Nova sprint</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <S.Container>
          <p>Nome</p>
          <Input
            placeholder="Sprint 1"
            name={name}
            onChange={(event): void => setName(event)}
          />
        </S.Container>
        <S.Container>
          <p>Período</p>
          <DateRangePicker
            block
            format="dd/MM/yyyy"
            onChange={(event): void =>
              setRange({
                dateInit: event ? event[0] : new Date(),
                dateEnd: event ? event[1] : new Date(),
                dateCreated: new Date(),
              })
            }
          />
        </S.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={validateValues} appearance="primary">
          Ok
        </Button>
        <Button onClick={onClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateSprintModal;