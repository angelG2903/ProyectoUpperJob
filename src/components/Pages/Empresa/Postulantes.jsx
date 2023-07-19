import { Search, Select } from "../../atoms";
import { CardPostulantes } from "../../molecules";
import { Navbar } from "../../organisms/navBar/Navbar"
import './styles/postulantes.css';

export const Postulantes = () => {
    return (
        <>
            <section className="margenes">

                <Navbar isLogin={ false }/>

                <div className="contenedor">
                    <button className="button is-rounded mt-2 big btn2">Crear vacante</button>
                </div>

                <div className="ti1">
                    <i className="fa-solid fa-toggle-off fa-rotate-180 fa-2xl ic1"></i>
                    <p className="ti2">Mis vacantes activas</p>
                </div>

                <Search TextName="Buscar vacantes" />
                <Select TextName="Habilidades"/>

                <CardPostulantes TextName="Web Developer"/>
                <CardPostulantes TextName="Web Developer"/>

            </section>
        </>
    )
}
