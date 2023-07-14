import { Route, Routes } from "react-router-dom"
import { PrincipalEmpresa } from "./components/Pages/PrincipalEmpresa"
import { RegistroEmpresa } from "./components/Pages/RegistroEmpresa"
import { InformesButton } from "./components/Pages/InformesButton"
import { FormularioEmpleado } from "./components/Pages/Empleado/FormularioEmpleado"

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={ <PrincipalEmpleado /> } /> */}
        <Route path="/" element={ <InformesButton /> } />

        <Route path="empresa" element={ <PrincipalEmpresa /> }/>
        <Route path="registro" element={ <RegistroEmpresa /> }/>
        <Route path="informes" element={ <InformesButton /> }/>
        <Route path="registro/empleado" element={ <FormularioEmpleado /> }/>

      </Routes>
    </>
  )
}

export default App
