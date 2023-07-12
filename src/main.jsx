import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bulma/css/bulma.min.css';
import './main.css';
import './components/Pages/styles/style.css';
import './components/Pages/styles/informes.css';
import './components/Pages/styles/registroC.css';
import './components/Pages/styles/mensajeA.css';
import { RegistroCorreo } from './components/Pages/RegistroCorreo';
// import { MensajeAcceso } from './components/Pages/MensajeAcceso';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <MensajeAcceso/> */}
    <RegistroCorreo/>
  </React.StrictMode>,
)
