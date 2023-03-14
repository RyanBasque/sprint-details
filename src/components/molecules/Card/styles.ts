import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px 0 10px 35px;

  font-size: 13px;

  cursor: pointer;

  transition: background 0.5s;

  &:hover {
    background-color: ${colors["light-gray"]};

    > button {
      display: flex;
      align-items: center;
    }
  }
`;

export const TrashBtn = styled.button`
  background-color: transparent;
  border: none;

  display: none;

  margin-right: 10px;
`;
