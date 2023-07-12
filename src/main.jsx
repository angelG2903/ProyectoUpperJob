import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'
import './main.css'
import './components/Pages/styles/style.css'
import './components/Pages/styles/informes.css'
import { InformesButton } from './components/Pages/InformesButton.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InformesButton/>
  </React.StrictMode>,
)
