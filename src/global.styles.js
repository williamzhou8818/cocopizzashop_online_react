import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Open Sans Condensed';
    padding: 20px 60px;
    @media screen and (max-width: 800px) {
        padding: 2px;
    } 
  }
  .App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #09d3ac;
  }
  
  
  a {
    text-decoration: none;
    color: black;
  }
  * {
    box-sizing: border-box;
  }
`;