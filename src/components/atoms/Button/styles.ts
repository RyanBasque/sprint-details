import styled, { css } from 'styled-components';

import colors from '../../../assets/colors';

import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  padding: 1.3em;
  margin-top: 1.5em;

  background-color: ${colors.gray};

  border: none;
  border-radius: 5px;

  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      padding: 1em;

      background-color: ${colors.red};

      color: ${colors.white};
    `};

  ${({ small }) =>
    small &&
    css`
      width: unset;
    `}
`;
