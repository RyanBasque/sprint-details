import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { useAuth } from "context/AuthContext";

import { postData } from "services/postData";

import { useToast } from "hooks/useToast";

import CreateSprintModal from "components/atoms/CreateSprintModal";

import { SprintType } from "models/sprint";

import * as S from "./styles";

const CreateSprint = (): JSX.Element => {
  const { user } = useAuth();
  const { showToast } = useToast();

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCreateSprint = (values: SprintType): void => {
    setShowModal(false);
    postData(`users/${user?.id}/sprints`, values);

    showToast({
      type: "success",
      message: "Sprint criada com sucesso",
    });
  };

  return (
    <>
      <S.Container>
        <S.Button onClick={(): void => setShowModal(true)}>
          <AiOutlinePlus size={15} />
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
