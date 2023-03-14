import { Outlet } from "react-router-dom";

import Header from "components/molecules/Header";
import NavigationBar from "components/organisms/NavigationBar";

import * as S from "./styles";

const Browse = (): JSX.Element => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <NavigationBar />
        <Outlet />
      </S.Wrapper>
    </>
  );
};

export default Browse;
