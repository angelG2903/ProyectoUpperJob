import { CardPostulanteEmpleado } from "../../molecules";
import { Navbar } from "../../organisms/navBar/Navbar"
import imagenes from "../../../assets/imagenes";
import './styles/postulacionesEstatus.css';

export const PostulacionesEstatus = () => {
    return (
        <>
            <section className="margenes">

                <Navbar isLogin={ false }/>
                <h2 className="tit-post">Postulaciones</h2>
                
                <div className="content-gridPos">
                    <CardPostulanteEmpleado 
                        TextName='Senior Software Enginer'
                        Text='Ciudad de México'
                        Image={imagenes.noPostular}
                    />

                    <CardPostulanteEmpleado 
                        TextName='Senior Software Enginer'
                        Text='Ciudad de México'
                        Image={imagenes.noPostular}
                    />
                    <CardPostulanteEmpleado 
                        TextName='Senior Software Enginer'
                        Text='Ciudad de México'
                        Image={imagenes.noPostular}
                    />
                    <CardPostulanteEmpleado 
                        TextName='Senior Software Enginer'
                        Text='Ciudad de México'
                        Image={imagenes.noPostular}
                    />
                </div>
                

            </section>
        </>
    )
}
