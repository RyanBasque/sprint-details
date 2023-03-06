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

export const SubtaskContainer = styled.div`
  margin-top: 20px;

  border-radius: 5px;
`;

export const Subtask = styled.div`
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  transition: background 0.5s;

  &:hover {
    background-color: ${colors["light-gray"]};
  }

  cursor: pointer;

  padding: 10px;

  border-top: solid 1px ${colors["light-gray"]};
`;

export const SubtaskNumber = styled.span`
  color: ${colors.blue};

  margin-right: 20px;
`;

export const SubtaskName = styled.span``;
