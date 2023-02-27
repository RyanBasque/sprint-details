import { useNavigate } from "react-router-dom";
import { Modal, Button } from "rsuite";

import { useSetData } from "requests/mutations/useSetData";

import { useToast } from "hooks/useToast";

type DeleteCardModalParams = {
  cardId: string;
  cardNumber: string;
  sprintId: string;
  showModal: boolean;
  onClose: () => void;
};

const DeleteCardModal = ({
  showModal,
  onClose,
  cardId,
  sprintId,
  cardNumber,
}: DeleteCardModalParams): JSX.Element => {
  const { showToast } = useToast();
  const { setData } = useSetData();
  const navigate = useNavigate();

  const handleDeleteCard = (): void => {
    setData(`sprints/${sprintId}/cards/${cardId}`, null);
    navigate("");

    showToast({
      type: "success",
      message: "Card apagado com sucesso",
    });
  };

  return (
    <Modal open={showModal} onClose={onClose} backdrop="static">
      <Modal.Header>
        <Modal.Title>Apagar card</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja mesmo apagar o card {cardNumber}?</Modal.Body>
      <Modal.Footer>
        <Button appearance="primary" onClick={handleDeleteCard}>
          Apagar
        </Button>
        <Button appearance="subtle" onClick={onClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteCardModal;
