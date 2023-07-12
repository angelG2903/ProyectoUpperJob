import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bulma/css/bulma.min.css'
import './main.css'
import './style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

)
