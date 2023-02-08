import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { useAuth } from "context/AuthContext";

import { postData } from "services/postData";

import CreateSprintModal from "components/atoms/CreateSprintModal";

import { CreateSprintType } from "models/createSprint";

import * as S from "./styles";

const CreateSprint = (): JSX.Element => {
  const { user } = useAuth();

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCreateSprint = (values: CreateSprintType): void => {
    setShowModal(false);

    postData(`users/${user?.id}/sprints`, values);
  };

  return (
    <>
      <S.Container>
        <S.Button onClick={(): void => setShowModal(true)}>
          <AiOutlinePlus size={20} />
          <p>Criar Sprint</p>
        </S.Button>
      </S.Container>

      <CreateSprintModal
        showModal={showModal}
        onClose={(): void => setShowModal(false)}
        onClick={handleCreateSprint}
      />
    </>
  );
};

export default CreateSprint;
