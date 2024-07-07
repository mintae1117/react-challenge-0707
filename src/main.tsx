import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';
import { QueryClient, QueryClientProvider } from 'react-query'

const GlobalStyles = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'EF_jejudoldam';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  * {
    box-sizing: border-box;
    font-family: "EF_jejudoldam";
  }
  body {
    font-weight: 400;
    color: white;
    line-height: 1.2;
    background-color: black;
    -ms-overflow-style: none;
    font-family: "EF_jejudoldam";
  }
  a {
    text-decoration:none;
    color:inherit;
    font-family: "EF_jejudoldam";
  }
`;

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <GlobalStyles />
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
