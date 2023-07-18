import { IconoArrow } from "../../atoms/icono/IconoArrow"
import upperjob from '../../../assets/Upperjob.svg';
import img from '../../../assets/cardFernanda.svg';
import './styles/verVacante.css';
import { ImagenRedonda } from "../../atoms/imagenRedonda/ImagenRedonda";
import { Button } from "../../atoms/button/Button";


export const VerVacante = () => {
  return (
    <>
        <section className="margenes">
        
            <IconoArrow/>

            <div className="ic-img">
                <img src={upperjob}/>
            </div>

            <div className="text-img">
                <div className="txt-i">
                    <div className="txt-hp">
                        <h2 className="txt-title">Analista Programador</h2>
                        <p className="txt-p">Sistema Educativo Justo Sierra  Gustavo A. Madero, Ciudad de México DF</p>
                    </div>
                    
                    <ImagenRedonda Image={img} style={'txt-image'} TextName='Amazon'/>
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

            <div className="butt-end">
                <Button TextName='Postularme' style={'btn1-end'}/>
                <Button TextName='Evaluar empresa' style={'btn2-end'}/>
            </div>

        </section>
    </>
  )
}
