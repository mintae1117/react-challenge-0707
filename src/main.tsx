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
  @font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
    font-family: "PyeongChangPeace-Bold";
  }
  body {
    font-weight: 400;
    color: white;
    line-height: 1.2;
    background-color: #41abf6;
    -ms-overflow-style: none;
    font-family: "PyeongChangPeace-Bold";
  }
  a {
    text-decoration:none;
    color:inherit;
    font-family: "PyeongChangPeace-Bold";
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
