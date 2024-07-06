import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';
import { QueryClient, QueryClientProvider } from 'react-query'

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

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <GlobalStyles />
    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
