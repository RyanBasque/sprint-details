import { useNavigate } from "react-router-dom";
import { Modal, Button } from "rsuite";

import { useAuth } from "context/AuthContext";

import { useToast } from "hooks/useToast";

import { setData } from "services/setData";

type DeleteSprintModalParams = {
  sprintName: string;
  sprintId: string;
  showModal: boolean;
  onClose: () => void;
};

const DeleteSprintModal = ({
  showModal,
  onClose,
  sprintId,
  sprintName,
}: DeleteSprintModalParams): JSX.Element => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleDeleteSprint = (): void => {
    setData(`users/${user?.id}/sprints/${sprintId}`, null);
    navigate("");

    showToast({
      type: "success",
      message: "Sprint apagada com sucesso",
    });
    onClose();
  };

  return (
    <Modal open={showModal} onClose={onClose} backdrop="static">
      <Modal.Header>
        <Modal.Title>Apagar sprint</Modal.Title>
      </Modal.Header>
      <Modal.Body>Deseja mesmo apagar a sprint {sprintName}?</Modal.Body>
      <Modal.Footer>
        <Button appearance="primary" onClick={handleDeleteSprint}>
          Apagar
        </Button>
        <Button appearance="subtle" onClick={onClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteSprintModal;
