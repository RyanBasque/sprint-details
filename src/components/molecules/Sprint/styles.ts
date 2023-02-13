import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SprintsContainer = styled.div`
  border-bottom: solid 2px ${colors.blue};

  padding-bottom: 10px;
`;

export const SprintName = styled.div`
  padding: 10px 20px 10px 20px;

  font-size: 20px;

  background-color: transparent;
  transition: background 0.5s;

  cursor: pointer;

  &:hover {
    background-color: ${colors["light-gray"]};
  }
`;
