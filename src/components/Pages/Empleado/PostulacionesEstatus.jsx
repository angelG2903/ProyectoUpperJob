import { Navbar } from "../../organisms/navBar/Navbar"
import './styles/postulacionesEstatus.css';
import img from '../../../assets/noPostular.svg';
import { CardPostulanteEmpleado } from "../../molecules/cardPostulanteEmpleado/CardPostulanteEmpleado";

export const PostulacionesEstatus = () => {
    return (
        <>
            <section className="margenes">

                <Navbar/>
                <h2 className="tit-post">Postulaciones</h2>

                <CardPostulanteEmpleado 
                    TextName='Senior Software Enginer'
                    Text='Ciudad de México'
                    Image={img}
                />

                <CardPostulanteEmpleado 
                    TextName='Senior Software Enginer'
                    Text='Ciudad de México'
                    Image={img}
                />

            </section>
        </>
    )
}
