import { Navbar } from "../../organisms/navBar/Navbar"
import '../styles/perfilEmpresa.css';
import img from'../../../assets/cardFernanda.svg';
import { Plan } from "../../molecules/plan/Plan";
import { CardInformacion } from "../../molecules/cardInformacion/CardInformacion";
import { ImagenRedonda } from "../../atoms/imagenRedonda/ImagenRedonda";
import { ButtonPequeño } from "../../atoms/buttonPequeño/ButtonPequeño";


export const PerfilEmpresa = () => {
    return (
        <>
            <section className="margenes">
                <Navbar/>
                
                <ButtonPequeño TextName='Mis tarjetas'/>

                <ImagenRedonda Image={img} TextName='Amazon'/>
                <CardInformacion 
                    Title="Información"
                    TextName={
                        `Sitio web: www.amazon 
                        Sede: México 
                        Tamaño: Más de 100 empleados 
                        Fundado: 2001 
                        Tipo: Empresa - pública 
                        Industria:  Software empresarial `
                    }/>

                <h2 className="plan-act">Plan activo</h2>

                <Plan Title="$400" Text="Ver detalles"/>

            </section>
        </>
    )
}
