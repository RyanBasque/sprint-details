import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors["blue"]};

  min-height: 40px;

  padding: 10px 20px;
`;

export const LogoContainer = styled.div`
  i {
    width: 30px;
    height: 30px;
  }
`;

export const InputContainer = styled.div`
  width: 20%;
`;

export const Profile = styled.div`
  img {
    border-radius: 100%;

    width: 35px;
    height: 35px;
  }
`;
