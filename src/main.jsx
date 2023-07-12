import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'
import './main.css'
<<<<<<< HEAD
import './style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App />
  </BrowserRouter>

=======
import './components/Pages/styles/style.css'
import './components/Pages/styles/informes.css'
import { InformesButton } from './components/Pages/InformesButton.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InformesButton/>
  </React.StrictMode>,
>>>>>>> ab79d88128912142d6e3f38ac0d178dce298e675
)
