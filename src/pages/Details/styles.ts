import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.div`
  padding: 25px;

  max-height: calc(100vh - 70px);
  overflow-y: scroll;
`;

export const Form = styled.form``;

export const Header = styled.div``;

export const BreadcrumbsContainer = styled.div`
  font-size: 15px;

  padding-left: 5px;
`;

export const Name = styled.div`
  font-size: 25px;
  font-weight: 500;

  display: flex;
  align-items: center;

  width: 100%;
`;

export const ReactiveInput = styled.input`
  background-color: transparent;
  border: none;
  transition: background 0.5s;

  width: 100%;

  padding: 10px 5px;

  border-radius: 10px;

  &:focus {
    background-color: ${colors["light-gray"]};
  }

  &:hover {
    background-color: ${colors["light-gray"]};
  }
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;

  padding-left: 10px;
  margin-top: 10px;

  p {
    margin-right: 10px;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 2000px;

  background-color: ${colors["light-gray"]};

  margin-top: 30px;
  padding: 20px;

  border-radius: 10px;
`;
