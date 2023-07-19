import { ImagenRedonda, ButtonPeque } from "../../atoms";
import { Plan, CardInformacion } from "../../molecules";
import { Navbar } from "../../organisms/navBar/Navbar"
import imgenes from'../../../assets/imagenes';
import './styles/perfilEmpresa.css';


export const PerfilEmpresa = () => {
    return (
        <>
            <section className="margenes">
                <Navbar isLogin={false}/>
                
                <ButtonPeque TextName='Mis tarjetas'/>

                <ImagenRedonda Image={imgenes.cardFernanda} TextName='Amazon'/>
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
