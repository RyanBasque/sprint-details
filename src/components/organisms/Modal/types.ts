import { ReactNode } from "react";

export type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
};
