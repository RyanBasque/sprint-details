import { useState } from "react";
import { Button, DatePicker, Input, Modal } from "rsuite";

import { useToast } from "hooks/useToast";

import { CreateCardModalProps } from "./types";

import * as S from "./styles";

const CreateCardModal = ({
  showModal,
  onClose,
  onClick,
}: CreateCardModalProps): JSX.Element => {
  const { showToast } = useToast();

  const [name, setName] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [timeEstimate, setTimeEstimate] = useState<string>();
  const [conclusionDate, setConclusionDate] = useState<string>();

  const resetValues = (): void => {
    setName(undefined);
    setNumber(undefined);
    setTimeEstimate(undefined);
    setConclusionDate(undefined);
  };

  const validateValues = (): void => {
    if (!name || !timeEstimate || !number || !conclusionDate) {
      showToast({
        type: "error",
        message: "Preencha todos os campos para continuar",
      });

      return;
    }

    const sprintValues = {
      name,
      timeEstimate,
      number,
      conclusionDate,
      dateCreated: new Date().toString(),
    };

    onClick(sprintValues);
  };

  return (
    <Modal open={showModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Novo card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <S.Container>
          <p>Nome</p>
          <Input
            placeholder="Validar campos de Input"
            onChange={(event): void => setName(event)}
          />
        </S.Container>
        <S.Container>
          <p>Número</p>
          <Input
            placeholder="CORE1-984"
            onChange={(event): void => setNumber(event)}
          />
        </S.Container>
        <S.Container>
          <p>Estimativa</p>
          <Input
            placeholder="30H"
            onChange={(event): void => setTimeEstimate(event)}
          />
        </S.Container>
        <S.Container>
          <p>Data prevista de conclusão</p>
          <DatePicker
            onChange={(event): void => setConclusionDate(event?.toString())}
          />
        </S.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button appearance="primary" onClick={validateValues}>
          Ok
        </Button>
        <Button
          appearance="subtle"
          onClick={(): void => {
            resetValues();
            onClose();
          }}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCardModal;
