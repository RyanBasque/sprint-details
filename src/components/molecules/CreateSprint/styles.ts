import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.div`
  width: 100%;
  height: 70px;

  background-color: transparent;

  cursor: pointer;

  transition: background 0.5s;

  &:hover {
    background-color: ${colors["light-gray"]};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  border: none;

  p {
    margin-left: 10px;

    font-size: 20px;
  }
`;
