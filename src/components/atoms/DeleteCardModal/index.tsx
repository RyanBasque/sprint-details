import { useNavigate } from "react-router-dom";
import { Modal, Button } from "rsuite";

import { useAuth } from "context/AuthContext";

import { useToast } from "hooks/useToast";

import { setData } from "services/setData";

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
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleDeleteCard = (): void => {
    setData(`users/${user?.id}/sprints/${sprintId}/cards/${cardId}`, null);
    navigate("");

    showToast({
      type: "Success",
      message: "Card apagado com sucesso",
    });
  };

  return (
    <Modal open={showModal} onClose={onClose}>
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
