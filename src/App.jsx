import { Route, Routes } from "react-router-dom"
import { PrincipalEmpleado } from "./components/Pages/Empleado/PrincipalEmpleado"
import { PrincipalEmpresa } from "./components/Pages/PrincipalEmpresa"
import { RegistroEmpresa } from "./components/Pages/RegistroEmpresa"
import { InformesButton } from "./components/Pages/InformesButton"
import { LoginEmpresa } from "./components/Pages/Empresa/LoginEmpresa"

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={ <PrincipalEmpleado /> } /> */}
        <Route path="/" element={ <LoginEmpresa /> } />

        <Route path="empresa" element={ <PrincipalEmpresa /> }/>
        <Route path="registro" element={ <RegistroEmpresa /> }/>
        <Route path="informes" element={ <InformesButton /> }/>
      </Routes>
    </>
  )
}

export default App
