import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxTrash } from "react-icons/rx";

import DeleteCardModal from "components/atoms/DeleteCardModal";

import { CardParams } from "./types";

import * as S from "./styles";

const Card = ({ data, sprintId }: CardParams): JSX.Element => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <S.Container onClick={(): void => navigate(`${sprintId}/${data.id}`)}>
        {data.id && <p>{data.name}</p>}

        <S.TrashBtn onClick={(): void => setShowModal(true)}>
          <RxTrash size={20} />
        </S.TrashBtn>
      </S.Container>
      <DeleteCardModal
        cardId={data.id || ""}
        cardNumber={data.number}
        sprintId={sprintId}
        showModal={showModal}
        onClose={(): void => setShowModal(false)}
      />
    </>
  );
};

export default Card;
