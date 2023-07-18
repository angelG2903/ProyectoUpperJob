import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'
import './main.css'
import './components/Pages/styles/style.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { MiPlanActivo } from './components/Pages/Empresa/MiPlanActivo'
import { PerfilEmpleado } from './components/Pages/Empleado/PerfilEmpleado'
import { PerfilEmpresa } from './components/Pages/Empresa/PerfilEmpresa'
import { Postulaciones } from './components/Pages/Empleado/Postulaciones'
import { VerVacante } from './components/Pages/Empleado/VerVacante'


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <App/>
    {/* <VerVacante/> */}
  </BrowserRouter>

)
