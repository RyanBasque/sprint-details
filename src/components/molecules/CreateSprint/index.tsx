import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { postData } from "services/postData";

import CreateSprintModal from "components/atoms/CreateSprintModal";

import { CreateSprintType } from "models/createSprint";

import * as S from "./styles";

const CreateSprint = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCreateSprint = (values: CreateSprintType): void => {
    setShowModal(false);

    console.log(values);
    postData(values, "sprint");
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
