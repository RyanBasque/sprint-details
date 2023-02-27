import { useNavigate } from "react-router-dom";
import { Modal, Button } from "rsuite";

import { useSetData } from "requests/mutations/useSetData";

import { useToast } from "hooks/useToast";

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
  const { showToast } = useToast();
  const { setData } = useSetData();
  const navigate = useNavigate();

  const handleDeleteSprint = (): void => {
    setData(`sprints/${sprintId}`, null);
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
