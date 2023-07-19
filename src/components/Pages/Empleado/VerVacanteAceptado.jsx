import { IconoArrow, ImagenRedonda, Button, Tag } from "../../atoms"
import imagenes from "../../../assets/imagenes";
import './styles/verVacanteAceptado.css'

export const VerVacanteAceptado = () => {
    return (
        <>
            <section className="margenes">
                <IconoArrow/>

                <div className="ic-img">
                    <img src={imagenes.UpperJob}/>
                </div>

                {/* <div className="notification is-info">
                    <button className="delete"></button>
                    Se ha enviado a su correo electrónico los pasos a seguir para su respectivo proceso
                </div> */}

                <div className="text-img">
                    <Tag TextName='Aceptado' style='tag-color2'/>
                    <div className="txt-i">
                        <div className="txt-hp">
                            <h2 className="txt-title">Analista Programador</h2>
                            <p className="txt-p">Sistema Educativo Justo Sierra  Gustavo A. Madero, Ciudad de México DF</p>
                        </div>
                        
                        <ImagenRedonda Image={imagenes.cardFernanda} style={'txt-image'} TextName='Amazon'/>
                    </div>

                    <div className="txt-cont">
                        <p className="txt-cont-p">
                            Escolaridad: Ing. en Sistemas Computacionales, Lic. en Ciencias Computacionales, 
                            Lic. en Informática o afín. Experiencia: Indispensable cuente con experiencia en programación.
                            Manejo de los framework Laravel y CodeIgnitier, programación: Orientada a objetos, 
                            Estructurada, Scrum, PHP, visual Net, JQuery, AJAX, CSS, .NET, C#. 
                            Manejo de SQL Server y MySQL (Administración y lenguaje), Star UML
                        </p>
                        
                        <h2 className="txt-cont-tit">Requerimientos</h2>
                        <ul>
                            <li>Educación mínima: Educación superior - Licenciatura</li>
                            <li>1 año de experiencia</li>
                            <li>Edad: entre 25 y 45 años</li>
                        </ul>
                    </div>
                </div>

                <Button TextName='Evaluar empresa' style={'btt-pos'}/>

            </section>
        </>
    )
}
