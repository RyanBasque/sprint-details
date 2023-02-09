import { useMemo } from "react";

import Createcard from "../Createcard";
import Card from "../Card";

import { translateObject } from "utils/translateObject";

import { CardType } from "models/card";

import { SprintParams } from "./types";

import * as S from "./styles";

const Sprint = ({ data }: SprintParams): JSX.Element => {
  const sprint = useMemo(
    () =>
      data.map((element) => {
        const cards = translateObject<CardType>(element.cards);
        return { ...element, cards };
      }),
    [data]
  );

  return (
    <S.Container>
      {sprint.map((sprint) => (
        <S.SprintsContainer key={sprint.id}>
          <S.SprintName key={sprint.id}>{sprint.name}</S.SprintName>
          <Createcard key={crypto.randomUUID()} sprintId={sprint.id} />

          {sprint.cards?.length
            ? sprint.cards.map((card) => <Card key={card.id} data={card} />)
            : null}
        </S.SprintsContainer>
      ))}
    </S.Container>
  );
};

export default Sprint;
