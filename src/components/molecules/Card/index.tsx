import { Link } from "react-router-dom";

import { CardParams } from "./types";

import * as S from "./styles";

const Card = ({ data }: CardParams): JSX.Element => {
  return (
    <S.Container>
      {data.id && <Link to={data.id}>{data.name}</Link>}
    </S.Container>
  );
};

export default Card;
