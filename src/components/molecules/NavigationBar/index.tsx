import CreateSprint from "components/molecules/CreateSprint";

import * as S from "./styles";

const NavigationBar = (): JSX.Element => {
  // const [sprints, setSprints] = useState();

  // useEffect((): void => {
  //   setSprints(getData("sprint"));
  // }, []);

  // console.log(sprints);

  return (
    <S.Container>
      <S.CreateSprintContainer>
        <CreateSprint />
      </S.CreateSprintContainer>
    </S.Container>
  );
};

export default NavigationBar;
