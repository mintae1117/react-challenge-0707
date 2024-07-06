import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 400;
    color: white;
    line-height: 1.2;
    background-color: black;
    -ms-overflow-style: none;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
