import { useState } from "react";
import { Button, Input, Modal, DateRangePicker } from "rsuite";

import { useToast } from "hooks/useToast";

import { SprintType } from "models/sprint";

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

  const [name, setName] = useState<string>();
  const [range, setRange] = useState<RangeType>({} as RangeType);

  const resetValues = (): void => {
    setName(undefined);
    setRange({} as RangeType);
  };

  const validateValues = (): void => {
    if (!name || !range.dateCreated || !range.dateInit || !range.dateEnd) {
      showToast({
        type: "error",
        message: "Preencha todos os campos para continuar",
      });

      return;
    }

    const sprintValues: SprintType = {
      name,
      dateCreated: range.dateCreated.toString(),
      dateInit: range.dateInit.toString(),
      dateEnd: range.dateEnd.toString(),
    };

    onClick(sprintValues);
  };

  return (
    <Modal open={showModal} onClose={onClose} backdrop="static">
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
            placeholder="Selecione um período"
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
        <Button
          appearance="subtle"
          onClick={(): void => {
            resetValues();
            onClose();
          }}
        >
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateSprintModal;
