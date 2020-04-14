import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
    height: 100vh;
    background: #030303;
    color: #fff;
  }

  #root {
    height: 100vh;
    min-width: 768px;
    min-height: 600px;
  }
`;
