import colors from "assets/colors";

import * as S from "./styles";

type LogoParams = {
  color?: string;
};

const Logo = ({ color = colors.blue }: LogoParams): JSX.Element => {
  return <S.IcoSprint color={color} />;
};

export default Logo;
