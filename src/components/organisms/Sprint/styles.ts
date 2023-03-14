import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SprintsContainer = styled.div`
  border-bottom: solid 2px ${colors.blue};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SprintName = styled.div`
  padding: 10px 20px 10px 20px;

  font-size: 15px;
`;

export const TrashBtn = styled.button`
  background-color: transparent;
  border: none;

  margin-right: 10px;

  display: flex;
  align-items: center;
`;
