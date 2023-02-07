import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.blue};

  min-height: 70px;

  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  i {
    width: 40px;
    height: 40px;
  }
`;

export const InputContainer = styled.div`
  width: 20%;
`;

export const Profile = styled.div`
  img {
    border-radius: 100%;

    width: 50px;
    height: 50px;
  }
`;
