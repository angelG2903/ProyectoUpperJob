import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'
import './main.css'
import './components/Pages/styles/style.css'
import { BrowserRouter } from 'react-router-dom'
import { Menu } from './Menu'
import { FormularioEmpleado } from './components/Pages/Empleado/FormularioEmpleado'
import { PerfilEmpleado } from './components/Pages/Empleado/PerfilEmpleado'
import { Postulaciones } from './components/Pages/Empleado/Postulaciones'
import { PostulacionesEstatus } from './components/Pages/Empleado/PostulacionesEstatus'
import { PrincipalEmpleado } from './components/Pages/Empleado/PrincipalEmpleado'
import { VerVacante } from './components/Pages/Empleado/VerVacante'
import { VerVacanteAceptado } from './components/Pages/Empleado/VerVacanteAceptado'
import { VerVacanteTag } from './components/Pages/Empleado/VerVacanteTag'
import ContratarPlan from './components/Pages/Empresa/ContratarPlan'
// import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    {/* <App/> */}
    {/* <Menu/> */}
    <ContratarPlan/>
  </BrowserRouter>

)
