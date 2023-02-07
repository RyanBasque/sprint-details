import { CreateSprintType } from "models/createSprint";

export type CreateSprintModalProps = {
  showModal: boolean;
  onClose: () => void;
  onClick: (values: CreateSprintType) => void;
};
