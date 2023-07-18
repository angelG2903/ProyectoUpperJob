import { Route, Routes } from "react-router-dom"
import { PrincipalEmpresa } from "./components/Pages/PrincipalEmpresa"
import { RegistroEmpresa } from "./components/Pages/RegistroEmpresa"
import { InformesButton } from "./components/Pages/InformesButton"
import { FormularioEmpleado } from "./components/Pages/Empleado/FormularioEmpleado"
import { FormularioEmpresa } from "./components/Pages/Empresa/FormularioEmpresa"
import { RegistroTarjeta } from "./components/Pages/Empresa/RegistroTarjeta"
import { VincularTarjeta } from "./components/Pages/Empresa/VincularTarjeta"
import { MisTarjetas } from "./components/Pages/Empresa/MisTarjetas"
import { RegistroEmpleado } from "./components/Pages/Empleado/RegistroEmpleado"
import { Footer } from "./components/atoms/footer/Footer"

function App() {

  return (
    <>
      <Routes>

        <Route path="/" element={ <RegistroEmpleado /> }/>

        <Route path="misTarjetas" element={ <MisTarjetas /> }/>
        <Route path="vincular" element={ <VincularTarjeta /> }/>
        <Route path="registro/tarjeta" element={ <RegistroTarjeta /> }/>
        <Route path="formulario/Empresa" element={ <FormularioEmpresa /> }/>
        <Route path="formulario/Empleado" element={ <FormularioEmpleado /> }/>
        <Route path="empresa" element={ <PrincipalEmpresa /> }/>
        <Route path="registro" element={ <RegistroEmpresa /> }/>
        <Route path="informes" element={ <InformesButton /> }/>

      </Routes>
      
      <Footer />

    </>
  )
}

export default App
