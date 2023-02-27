import styled from "styled-components";

import colors from "assets/colors";

export const SubtaskController = styled.div`
  min-height: 35px;

  display: grid;
  grid-template-columns: 0.3fr auto;
  gap: 10px;
`;

export const SubtaskInput = styled.input`
  width: 100%;

  padding: 10px;

  border-radius: 5px;

  border: solid 1px ${colors["light-gray"]};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 20px;

  margin-top: 20px;

  width: 100%;
`;
