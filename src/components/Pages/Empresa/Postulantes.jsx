import { Search } from "../../atoms/search/Search";
import { Select } from "../../atoms/select/Select";
import { Navbar } from "../../organisms/navBar/Navbar"
import '../styles/postulantes.css';

export const Postulantes = () => {
    return (
        <>
            <section className="margenes">

                <Navbar/>

                <div className="contenedor">
                    <button className="button is-rounded mt-2 big btn2">Crear vacante</button>
                </div>
                <br />

                <div className="ti1">
                    <i className="fa-solid fa-toggle-off fa-rotate-180 fa-2xl ic1"></i>
                    <p className="ti2">Mis vacantes activas</p>
                </div>

                <Search TextName="Buscar vacantes"/>
                <Select TextName="Habilidades"/>

                <div className="ca">
                    <div className="ti3">
                        <i className="fa-solid fa-display fa-2xl"></i>
                        <h3>Web Developer</h3>
                    </div>

                    <div className="par">
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
                    </div>
                    
                    <hr />

                    <div className="buttonsFinal">
                        <button className="button is-primary is-outlined is-rounded btnF">Editar</button>
                        <button className="button is-primary is-outlined is-rounded btnF2">Eliminar</button>
                    </div>

                </div>

                <div className="ca">
                    <div className="ti3">
                        <i className="fa-solid fa-display fa-2xl"></i>
                        <h3>Web Developer</h3>
                    </div>

                    <div className="par">
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
                    </div>
                    
                    <hr />

                    <div className="buttonsFinal">
                        <button className="button is-primary is-outlined is-rounded btnF">Editar</button>
                        <button className="button is-primary is-outlined is-rounded btnF2">Eliminar</button>
                    </div>

                </div>

            </section>
        </>
    )
}
