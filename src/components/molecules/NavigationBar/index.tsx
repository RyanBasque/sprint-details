import CreateSprint from "components/molecules/CreateSprint";

import * as S from "./styles";

const NavigationBar = (): JSX.Element => {
  return (
    <S.Container>
      <S.CreateSprintContainer>
        <CreateSprint />
      </S.CreateSprintContainer>
    </S.Container>
  );
};

export default NavigationBar;
