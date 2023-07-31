import { ImagenRedonda, Button, ButtonPeque } from "../../atoms";
import { Navbar } from "../../organisms/navBar/Navbar"
import { CardInformacion } from "../../molecules";
import imagenes from "../../../assets/imagenes";
import './styles/perfilEmpleado.css'


export const PerfilEmpleado = () => {
    return (
        <>
            <section className="margenes">
                
                <Navbar isLogin={ false }/>

                <ButtonPeque TextName='Editar perfil'/>

                <div className="content-ImgInf-PEm">
                    <ImagenRedonda Image={imagenes.cardFernanda} TextName={'Conchita Gutierrez'}/>
                    <CardInformacion 
                        Title='Datos personales'
                        TextName='
                            Nombre: Juan Emanuel
                            Apellidos: Arriaga Castillo
                            Correo: juanarriaga@gmail.com
                            Teléfono: 2241144852
                            Ubicación: Azcapotzalco, Ciudad de México'/>
                </div>

                <h2 className="sub-h2">Documentos adjuntos</h2>

                <div className="content-btns-PerEmple">
                    <Button TextName='Visualizar CV'/>
                    <Button TextName='Visualizar Carta de presentacion'/>
                </div>
                
            </section>
        </>
    )
}
