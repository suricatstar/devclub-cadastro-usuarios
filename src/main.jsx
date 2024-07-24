import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
// quando o arquivo tem nome index ele é o primeiro a ser buscado em uma pasta
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
