import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.div`
  padding: 0 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-top: 25px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 300;
  color: ${colors.black};

  display: block;

  margin-bottom: 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  width: 30px;

  border-radius: 50%;

  background-color: transparent;

  border: none;

  cursor: pointer;

  transition: background 0.5s;

  &:hover {
    background-color: ${colors["light-gray"]};
  }
`;

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
