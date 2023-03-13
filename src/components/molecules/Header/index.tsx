import { useEffect, useState } from "react";

import { useGetData } from "requests/queries/useGetData";

import { useAuth } from "context/AuthContext";

import Logo from "components/atoms/Logo";

import { SprintType } from "models/sprint";
import * as S from "./styles";

const HeaderBar = (): JSX.Element => {
  const { user } = useAuth();
  const { getData } = useGetData();

  const [sprintData, setSprintData] = useState<SprintType>();

  useEffect(() => {
    getData("sprints", (snapshot) => {
      const sprintValues = snapshot.val();
      setSprintData(sprintValues);
    });
  }, []);

  return (
    <S.Container>
      <S.LogoContainer>
        <Logo color="#FFFF" />
      </S.LogoContainer>
      {/* <S.InputContainer>
        <InputGroup>
          <Input
            placeholder="Pesquisar por Cards e Sprints"
            onChange={(value): void => setDataToSearch(value)}
          />
          <InputGroup.Button
            onClick={(): void => filterCard(sprintData, dataToSearch)}
          >
            <SearchIcon />
          </InputGroup.Button>
        </InputGroup>
      </S.InputContainer> */}
      {user?.avatar && (
        <S.Profile>
          <figure>
            <img
              src={user?.avatar}
              referrerPolicy="no-referrer"
              alt="google avatar"
            />
          </figure>
        </S.Profile>
      )}
    </S.Container>
  );
};

export default HeaderBar;
