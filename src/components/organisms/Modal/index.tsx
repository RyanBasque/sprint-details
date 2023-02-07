import { AiOutlineClose } from "react-icons/ai";

import { ModalProps } from "./types";

import * as S from "./styles";

const Modal = ({ show, onClose, children }: ModalProps): JSX.Element => {
  return (
    <S.Container show={show}>
      <S.ChildrenContainer>
        <S.Header>
          <S.CloseModal onClick={onClose}>
            <AiOutlineClose size={20} />
          </S.CloseModal>
        </S.Header>
        {children}
      </S.ChildrenContainer>
    </S.Container>
  );
};

export default Modal;
