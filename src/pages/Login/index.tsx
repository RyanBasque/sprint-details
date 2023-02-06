import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineGoogle } from "react-icons/ai";

import Button from "components/atoms/Button";
import Logo from "components/atoms/Logo";

import { useToast } from "hooks/useToast";

import { useAuth } from "context/AuthContext";

import colors from "assets/colors";

import * as S from "./styles";

const Login = (): JSX.Element => {
  const { signInWithGoogle } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const login = async (): Promise<void> => {
    try {
      await signInWithGoogle();
      navigate("browse");
    } catch (err) {
      const error = err as Error;

      console.error(error.message);
      showToast({ message: error.message, type: "error" });
    }
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.ButtonContainer>
        <Button secondary onClick={login}>
          <AiOutlineGoogle color={colors.white} size={24} />
          Entrar com o Google
          <AiOutlineArrowRight />
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Login;
