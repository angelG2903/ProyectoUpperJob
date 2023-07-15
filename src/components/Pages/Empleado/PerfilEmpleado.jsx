import { Navbar } from "../../organisms/navBar/Navbar"
import img from'../../../assets/cardFernanda.svg';
import { ImagenRedonda } from "../../atoms/imagenRedonda/ImagenRedonda";
import { CardInformacion } from "../../molecules/cardInformacion/CardInformacion";
import './styles/perfilEmpleado.css'
import { Button } from "../../atoms/button/Button";
import { ButtonPequeño } from "../../atoms/buttonPequeño/ButtonPequeño";


export const PerfilEmpleado = () => {
    return (
        <>
            <section className="margenes">
                
                <Navbar/>
                <ButtonPequeño TextName='Editar perfil'/>
                <ImagenRedonda Image={img} TextName={'Conchita Gutierrez'}/>
                <CardInformacion 
                    Title='Datos personales'
                    TextName='
                        Nombre: Juan Emanuel
                        Apellidos: Arriaga Castillo
                        Correo: juanarriaga@gmail.com
                        Teléfono: 2241144852
                        Ubicación: Azcapotzalco, Ciudad de México'/>

                <h2 className="sub-h2">Documentos adjuntos</h2>

                <Button TextName='Visualizar CV'/>
                <br />
                <Button TextName='Visualizar Carta de presentacion'/>
                
            </section>
        </>
    )
}
