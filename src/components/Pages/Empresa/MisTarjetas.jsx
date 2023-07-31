import { Button } from "../../atoms"
import { TarjetaCredito } from "../../molecules"
import { Navbar } from "../../organisms/navBar/Navbar"
import './styles/misTarjetas.css'

export const MisTarjetas = () => {
  return (
    <>
        <section className="margenes">
            
            <Navbar isLogin="false"/>
            <div className="style-misTar">
              <Button TextName={"Agregar nuevo método de pago"} style={"mt-5"}/>
            </div>
            <h1 className="mt-5 text-mTarje"><b>Mis tarjetas</b></h1>
            <div className="content-misTarje">
              <TarjetaCredito />
              
              <TarjetaCredito />
              
            </div>
            <div className="btn-abajTarje">
              <Button TextName={"Agregar nuevo método de pago"} style={"mt-5 dis-noneTar"}/>
            </div>
            

        </section>
    
    </>
  )
}
