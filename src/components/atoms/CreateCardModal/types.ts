import { CardType } from "models/card";

export type CreateCardModalProps = {
  showModal: boolean;
  onClose: () => void;
  onClick: (values: CardType) => void;
};
