import { createGlobalStyle, css } from "styled-components";

export const globalBodyStyle = css`
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    outline: none;
    box-sizing: border-box;
  }

  .rs-modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalBodyStyle}
`;
