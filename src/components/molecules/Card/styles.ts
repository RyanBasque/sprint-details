import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px 0 5px 35px;

  font-size: 16px;

  cursor: pointer;

  transition: background 0.5s;

  &:hover {
    background-color: ${colors["light-gray"]};
  }
`;
