import { Route, Routes } from "react-router-dom"
import { PrincipalEmpleado } from "./components/Pages/Empleado/PrincipalEmpleado"
import { PrincipalEmpresa } from "./components/Pages/PrincipalEmpresa"
import { RegistroEmpresa } from "./components/Pages/RegistroEmpresa"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <PrincipalEmpleado /> } />
        <Route path="empresa" element={ <PrincipalEmpresa /> }/>
        <Route path="registro" element={ <RegistroEmpresa /> }/>
      </Routes>
    </>
  )
}

export default App
