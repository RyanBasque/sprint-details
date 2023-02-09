import { SprintType } from "models/sprint";

export type CreateSprintModalProps = {
  showModal: boolean;
  onClose: () => void;
  onClick: (values: SprintType) => void;
};
