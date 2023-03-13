import { Outlet } from "react-router-dom";

import CardDetailsProvider from "context/CardDetailsContext";

import Header from "components/molecules/Header";
import NavigationBar from "components/organisms/NavigationBar";

import * as S from "./styles";

const Browse = (): JSX.Element => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <CardDetailsProvider>
          <NavigationBar />
          <Outlet />
        </CardDetailsProvider>
      </S.Wrapper>
    </>
  );
};

export default Browse;
