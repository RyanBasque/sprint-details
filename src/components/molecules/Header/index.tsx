import { useAuth } from "context/AuthContext";

import Input from "components/atoms/Input";
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
        <Input name="findCard" id="findCard" placeholder="Pesquisar card" />
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
