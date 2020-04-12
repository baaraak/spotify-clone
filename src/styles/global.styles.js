import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    min-width: 768px;
    min-height: 600px;
    overflow: hidden;
    height: 100vh;
    background: #090909;
    color: #fff;
  }

  #root {
    height: 100vh;
  }
`;
