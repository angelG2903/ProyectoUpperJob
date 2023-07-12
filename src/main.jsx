import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bulma/css/bulma.min.css'
import './main.css'
import './style.css'
import { PrincipalEmpresa } from './components/Pages/PrincipalEmpresa.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrincipalEmpresa />
  </React.StrictMode>,
)
