import styled from "styled-components";

import colors from "assets/colors";

export const Container = styled.div``;

export const Form = styled.form``;

export const Header = styled.div``;

export const BreadcrumbsContainer = styled.div`
  font-size: 15px;

  padding-left: 5px;

  display: flex;
  justify-content: space-between;
`;

export const Name = styled.fieldset`
  border: none;

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

  border-radius: 5px;

  &:focus {
    background-color: ${colors["light-gray"]};
  }

  &:hover {
    background-color: ${colors["light-gray"]};
  }
`;

export const ReactiveTextarea = styled.textarea`
  background-color: transparent;
  border: none;
  transition: background 0.5s;

  width: 100%;

  resize: both;

  overflow-y: auto;

  padding: 10px;

  border-radius: 5px;

  resize: none;

  color: ${colors.black};
  font-weight: 400;
  font-size: 16px;

  padding-left: 10px;

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

  margin-top: 10px;

  border-radius: 10px;
`;

export const SubTitle = styled.h2`
  font-size: 15px;
  font-weight: 500;
  color: ${colors.black};

  display: block;

  padding-left: 10px;
  margin-bottom: 5px;
`;

export const Wrapper = styled.span``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 20px;

  margin-top: 20px;
`;
