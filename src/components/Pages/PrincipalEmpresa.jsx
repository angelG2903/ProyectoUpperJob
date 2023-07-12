import { Button } from "../atoms/Button"
import { Navbar } from "../organismos/Navbar"
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
// import img4 from '../assets/Captura.png';

export const PrincipalEmpresa = () => {
    return (
        <>
            <Navbar/>

            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={img1} alt="Placeholder image"/>
                    </figure>
                </div>
            </div>

            <h3 className="subtitle mt-4">
                Ahorra costos y tiempo en tus procesos <br />
                de seleccion de forma rapída y fácil
            </h3>

            <Button TextName="Publicar una oferta"/>

            <div className="card2 mt-5">
                <ol className="ol">
                    <li className="list">
                        Publica tu vacante
                        <p>Crea facilmente tu oferta de trabajo</p>
                    </li>
                    <li className="list">
                        Revisa las postulaciones 
                        <p>Selecciona a los mejores candidatos</p>
                    </li>
                    <li className="list">
                        Contrata 
                        <p>Encuentra al candidato que mejor se adapte al perfil buscado </p>    
                    </li>
                </ol>
            </div>
    
            <h2 className="title2 mt-5">
                Publica tu oferta <br /> 
                en Upperjob
            </h2>

            <Button TextName="Encontrar candidatos"/>

            <h2 className="subtitle2 mt-5 "> 
                Localiza los mejores candidatos en la <br />
                web de empleo en Latinoamérica 
            </h2>

            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={img2} alt="Placeholder image"/>
                    </figure>
                </div>
            </div>

            <h2 className="h2 mt-4">Atrae al candidato que necesitas</h2>

            <div className="car">
                <div className="cardF">
                    <img src={img3} alt="Placeholder image"/>
                </div>
                <div className="ic">
                    <p>
                    <i className="fa-regular fa-lightbulb"></i>
                        Verifica sus habilidades
                    </p>
                    <p>
                    <i className="fa-solid fa-users"></i>
                    Organiza tus candidatos
                    </p>
                        
                </div>
            </div>


            <Button TextName="Comienza ahora"/>
        </>
    )
}
