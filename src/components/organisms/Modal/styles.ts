import styled, { css } from "styled-components";

import { StyledReturn } from "models/styledReturn";

import colors from "assets/colors";

type ContainerProps = {
  show: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;

  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ show }): StyledReturn =>
    css`
      display: ${show ? "flex" : "none"};
    `};
`;

export const Header = styled.div`
  width: 100%;
  height: 30px;

  display: flex;
  justify-content: flex-end;
`;

export const CloseModal = styled.button`
  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const ChildrenContainer = styled.div`
  min-width: 300px;
  min-height: 200px;

  background-color: ${colors.white};

  padding: 10px;

  border-radius: 10px;
`;
