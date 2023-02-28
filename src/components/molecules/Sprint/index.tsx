import { useMemo, useState } from "react";
import { RxTrash } from "react-icons/rx";

import DeleteSprintModal from "components/atoms/DeleteSprintModal";
import Createcard from "../CreateCard";
import Card from "../Card";

import { translateObject } from "utils/translateObject";

import { CardType } from "models/card";

import { SprintParams } from "./types";

import * as S from "./styles";

const Sprint = ({ data }: SprintParams): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

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
          <S.Header>
            <S.SprintName key={sprint.id}>{sprint.name}</S.SprintName>

            <S.TrashBtn onClick={(): void => setShowModal(true)}>
              <RxTrash size={20} />
            </S.TrashBtn>
          </S.Header>
          <Createcard key={crypto.randomUUID()} sprintId={sprint.id} />

          <DeleteSprintModal
            sprintId={sprint.id || ""}
            sprintName={sprint.name}
            showModal={showModal}
            onClose={(): void => setShowModal(false)}
          />

          {sprint.cards?.length
            ? sprint.cards.map((card) => (
                <Card key={card.id} sprintId={sprint.id || ""} data={card} />
              ))
            : null}
        </S.SprintsContainer>
      ))}
    </S.Container>
  );
};

export default Sprint;
