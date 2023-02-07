import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import CreateSprintModal from "../CreateSprintModal";

import * as S from "./styles";

const CreateSprint = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

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
      />
    </>
  );
};

export default CreateSprint;
