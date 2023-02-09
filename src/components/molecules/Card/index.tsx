import { CardParams } from "./types";

import * as S from "./styles";

const Card = ({ data }: CardParams): JSX.Element => {
  return (
    <S.Container onClick={(): void => console.log(data)}>
      {data.name}
    </S.Container>
  );
};

export default Card;
