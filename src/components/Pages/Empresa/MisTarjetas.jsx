import { Button } from "../../atoms/button/Button"
import { TarjetaCredito } from "../../molecules/tarjetaC/TarjetaCredito"
import { Navbar } from "../../organisms/navBar/Navbar"

export const MisTarjetas = () => {
  return (
    <>
        <section className="margenes">

            <Navbar isLogin="false"/>
            <h1 className="mt-5"><b>Mis tarjetas</b></h1>

            <TarjetaCredito style={"mt-5"}/>

            <Button TextName={"Editar"} style={"mt-5"}/>
            <Button TextName={"Agregar nuevo método de pago"} style={"mt-3"}/>

        </section>
    
    </>
  )
}
