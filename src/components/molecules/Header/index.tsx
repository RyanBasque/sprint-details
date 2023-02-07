import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

import { useAuth } from "context/AuthContext";

import Logo from "components/atoms/Logo";

import * as S from "./styles";

const HeaderBar = (): JSX.Element => {
  const { user } = useAuth();

  return (
    <S.Container>
      <S.LogoContainer>
        <Logo color="#FFFF" />
      </S.LogoContainer>
      <S.InputContainer>
        <InputGroup>
          <Input placeholder="Pesquisar por Cards e Sprints" />
          <InputGroup.Button>
            <SearchIcon />
          </InputGroup.Button>
        </InputGroup>
      </S.InputContainer>
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
