import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { postData } from "services/postData";

import { useToast } from "hooks/useToast";

import { useAuth } from "context/AuthContext";

import CreateCardModal from "components/atoms/CreateCardModal";

import { CardType } from "models/card";

import * as S from "./styles";

type CreatecardParams = {
  sprintId?: string;
};

const Createcard = ({ sprintId }: CreatecardParams): JSX.Element => {
  const { showToast } = useToast();
  const { user } = useAuth();

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCreateCard = (values: CardType): void => {
    setShowModal(false);
    postData(`users/${user?.id}/sprints/${sprintId}/cards`, values);

    showToast({
      type: "success",
      message: "Card criado com sucesso",
    });
  };

  return (
    <>
      <S.Container>
        <S.Button onClick={(): void => setShowModal(true)}>
          <AiOutlinePlus size={13} />
          <p>Criar Card</p>
        </S.Button>
      </S.Container>
      <CreateCardModal
        showModal={showModal}
        onClick={handleCreateCard}
        onClose={(): void => setShowModal(false)}
      />
    </>
  );
};

export default Createcard;
