import { Outlet } from "react-router-dom";

import Header from "components/molecules/Header";
import NavigationBar from "components/molecules/NavigationBar";

import * as S from "./styles";

const Browse = (): JSX.Element => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <NavigationBar />
        <S.DetailsContainer>
          <Outlet />
        </S.DetailsContainer>
      </S.Wrapper>
    </>
  );
};

export default Browse;
