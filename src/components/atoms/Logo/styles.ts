import styled, { css } from "styled-components";

import { StyledReturn } from "models/styledReturn";

import Sprint from "assets/icons/sprint.svg";

type IcoSprintParams = {
  color: string;
};

export const IcoSprint = styled.i<IcoSprintParams>`
  mask: url(${Sprint});
  mask-size: cover;
  display: inline-block;

  ${({ color }): StyledReturn => css`
    background-color: ${color};
  `}
`;
