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
                
                <div className="inputs-Postulantes">
                    <Search TextName="Buscar vacantes" styles={"d-nonePostu tam-SePos"} />
                    <Select TextName="Habilidades" styles="is-fullwidth d-nonePostu" selres="selectrespons" />

                    <Search TextName="Buscar vacantes" styles={"d-noP"} inputSe={"tamanioSea"}/>
                    <Select TextName="Habilidades" styles="d-noP" selres="" selecStyle={"tamanioSelect"}/>
                </div>

                <div className="content-postuCard">
                    <CardPostulantes TextName="Web Developer"/>
                    <CardPostulantes TextName="Web Developer"/>
                    <CardPostulantes TextName="Web Developer"/>
                </div>

            </section>
        </>
    )
}
