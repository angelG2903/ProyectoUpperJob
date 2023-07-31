import { Route, Routes } from "react-router-dom"
import { PrincipalEmpresa, RegistroEmpresa, InformesButton, FormularioEmpresa, RegistroTarjeta, VincularTarjeta, MisTarjetas, LoginEmpresa, Modal, ContratarPlan,PerfilEmpresa, MiPlanActivo, CrearVacante, Postulantes, PostulantesDetalles,PostulantesF} 
from "./components/Pages/Empresa";

import {RegistroEmpleado, FormularioEmpleado, PrincipalEmpleado, PerfilEmpleado, Postulaciones, PostulacionesEstatus, VerVacanteAceptado
} from "./components/Pages/Empleado"

import { RegistroCorreo } from "./components/Pages/RegistroCorreo"
import { MensajeAcceso } from "./components/Pages/MensajeAcceso"
import { Footer } from "./components/atoms"

function App() {

  return (
    <>
      <Routes>

        

        <Route path="Modal" element={ <Modal /> }/>
        <Route path="MensajeAcceso" element={ <MensajeAcceso /> }/>
        <Route path="registroCorreo" element={ <RegistroCorreo /> }/>

{/* ----------------------Empresa----------------------------------------- */}
        <Route path="registro" element={ <RegistroEmpresa /> }/>
        <Route path="LoginEmpresa" element={ <LoginEmpresa /> }/>
        <Route path="informes" element={ <InformesButton /> }/>
        <Route path="CrearVacante" element={ <CrearVacante /> }/>
        <Route path="vincular" element={ <VincularTarjeta /> }/>
        <Route path="registro/tarjeta" element={ <RegistroTarjeta /> }/>
        <Route path="formulario/Empresa" element={ <FormularioEmpresa /> }/>
        <Route path="ContratarPlan" element={ <ContratarPlan /> }/>
        <Route path="MiPlanActivo" element={ <MiPlanActivo /> }/>
        <Route path="misTarjetas" element={ <MisTarjetas /> }/>
        <Route path="PostulantesF" element={ <PostulantesF /> }/>
        <Route path="Postulantes" element={ <Postulantes /> }/>
        <Route path="PerfilEmpresa" element={ <PerfilEmpresa /> }/>
        <Route path="PostulantesDetalles" element={ <PostulantesDetalles /> }/>
        



{/* diff */}
        <Route path="empresa" element={ <PrincipalEmpresa /> }/>
{/* End */}

{/* ----------------------Empleado----------------------------------------- */}

        <Route path="Postulaciones" element={ <Postulaciones /> }/>
        <Route path="registroEmpleado" element={ <RegistroEmpleado /> }/>
        <Route path="formulario/Empleado" element={ <FormularioEmpleado /> }/>
        <Route path="PostulacionesEstatus" element={ <PostulacionesEstatus /> }/>
        <Route path="PerfilEmpleado" element={ <PerfilEmpleado /> }/>
        <Route path="PEmpleado" element={ <PrincipalEmpleado /> }/>


     
        <Route path="VerVacanteAceptado" element={ <VerVacanteAceptado /> }/>

      </Routes>
      
      <Footer />

    </>
  )
}

export default App
