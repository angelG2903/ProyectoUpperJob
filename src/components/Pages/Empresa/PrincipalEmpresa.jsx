import { Button } from "../../atoms"
import { Card2 } from "../../molecules";
import { Navbar } from "../../organisms/navBar/Navbar"
import imagenes from "../../../assets/imagenes";
import './styles/style.css'

export const PrincipalEmpresa = () => {
    return (
        <>
            <section className="margenes">
                <Navbar/>
            </section>

                <figure className="image is-5by4 img">
                    <img src={imagenes.img1}></img>
                    <div className="titleImg">
                        <h2>¡Únete a nosotros y publica tus ofertas !</h2>
                    </div>
                </figure>

                <section className="margenes">
                <h3 className="subtitle mt-4">
                    Ahorra costos y tiempo en tus procesos <br />
                    de seleccion de forma rapída y fácil
                </h3>

                <Button TextName="Publicar una oferta"/>

                <Card2/>
        
                <h2 className="title2 mt-5">
                    Publica tu oferta <br /> 
                    en Upperjob
                </h2>

                <Button TextName="Encontrar candidatos"/>

                <h2 className="subtitle2 mt-5 "> 
                    Localiza los mejores candidatos en la <br />
                    web de empleo en Latinoamérica 
                </h2>

                <figure className="image is-4by3 img2">
                    <img src={imagenes.img2}></img>
                </figure>

                <h2 className="h2 mt-4">Atrae al candidato que necesitas</h2>

                <div className="car">
                    <div className="cardF">
                        <img src={imagenes.img3} alt="Placeholder image"/>
                    </div>
                    <div className="ic">

                        <i className="fa-regular fa-lightbulb"></i>
                        <p>
                            Verifica sus habilidades
                        </p>

                        <i className="fa-solid fa-users"></i>
                        <p>
                            Organiza tus candidatos
                        </p>
                            
                    </div>
                </div>

                <Button TextName="Comienza ahora"/>
            </section>

        </>
    )
}