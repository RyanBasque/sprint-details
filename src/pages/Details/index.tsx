import DetailsForm from "components/molecules/DetailsForm";
import SubTask from "components/molecules/SubTask";

import * as S from "./styles";

const Details = (): JSX.Element => {
  return (
    <S.Container>
      <DetailsForm />
      <SubTask />
    </S.Container>
  );
};

export default Details;
