/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import Sprint from "components/organisms/Sprint";
import CreateSprint from "components/molecules/CreateSprint";

import { useAuth } from "context/AuthContext";

import { useGetData } from "requests/queries/useGetData";

import { translateObject } from "utils/translateObject";

import { SprintType } from "models/sprint";

import * as S from "./styles";

const NavigationBar = (): JSX.Element => {
  const { getData } = useGetData();
  const { user } = useAuth();

  const [sprints, setSprints] = useState<SprintType[]>([]);

  useEffect(() => {
    getData("sprints", (snapshot) => {
      const data = translateObject<SprintType>(snapshot.val());

      setSprints(data);
    });
  }, [user?.id]);

  return (
    <S.Container>
      <S.CreateSprintContainer>
        <CreateSprint />
      </S.CreateSprintContainer>
      <S.SprintsContainer>
        <Sprint data={sprints} />
      </S.SprintsContainer>
    </S.Container>
  );
};

export default NavigationBar;
