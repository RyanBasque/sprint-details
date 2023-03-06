import DetailsForm from "components/organisms/DetailsForm";
import SubTask from "components/organisms/SubTask";

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
