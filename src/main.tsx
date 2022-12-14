import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './globalStyles/global'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
