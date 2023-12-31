import React from 'react'
import ReactDOM from 'react-dom/client'
import { Page } from './pages/index.jsx'
import GlobalStyle from './styles/global.js';
import './styles/scrollbar.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Page />
  </React.StrictMode>,
)
