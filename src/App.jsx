import { Route, Routes } from "react-router-dom"
import { PrincipalEmpresa } from "./components/Pages/PrincipalEmpresa"
import { RegistroEmpresa } from "./components/Pages/RegistroEmpresa"
import { InformesButton } from "./components/Pages/InformesButton"

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={ <PrincipalEmpleado /> } /> */}
        <Route path="/" element={ <InformesButton /> } />

        <Route path="empresa" element={ <PrincipalEmpresa /> }/>
        <Route path="registro" element={ <RegistroEmpresa /> }/>
        <Route path="informes" element={ <InformesButton /> }/>
      </Routes>
    </>
  )
}

export default App
