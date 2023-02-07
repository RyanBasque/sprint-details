import Modal from "components/organisms/Modal";

type CreateSprintModalProps = {
  showModal: boolean;
  onClose: () => void;
};

const CreateSprintModal = ({
  showModal,
  onClose,
}: CreateSprintModalProps): JSX.Element => {
  return (
    <Modal show={showModal} onClose={onClose}>
      test
    </Modal>
  );
};

export default CreateSprintModal;
