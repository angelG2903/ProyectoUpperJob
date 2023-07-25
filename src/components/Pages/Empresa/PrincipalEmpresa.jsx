import { Button } from "../../atoms"
import { Card2 } from "../../molecules";
import { Navbar } from "../../organisms/navBar/Navbar"
import imagenes from "../../../assets/imagenes";
import './styles/style.css'

export const PrincipalEmpresa = () => {
    return (
        <>
            <section className="margenes">
                <Navbar />

                <article className="content-art1">
                    <div className="content-img1-text">
                        <h2 className="titleImg">¡Únete a nosotros y publica tus ofertas!</h2>
                        <img src={imagenes.img1} className="img1-text"/>
                    </div>

                    <div className="content-sub-bu">
                        <h3 className="subtitle mt-4">
                            Ahorra costos y tiempo en tus procesos <br />
                            de seleccion de forma rapída y fácil
                        </h3>

                        <Button TextName="Publicar una oferta" />

                    </div>

                    <div className="content-ti2-car2">
                        <h2 className="title2 mt-5">
                            Publica tu oferta <br />
                            en Upperjob
                        </h2>
                        <Card2 />
                        <Button TextName="Encontrar candidatos" style={"mt-5"} />
                    </div>
                </article>

                <article className="conetent-art2">
                    <div className="conetnt-sub2-img2">
                        <h2 className="subtitle2 mt-5 ">
                            Localiza los mejores candidatos en la <br />
                            web de empleo en Latinoamérica
                        </h2>
                        <img src={imagenes.img2} className="img2-sub"/>
                    </div>

                    <div className="content-t-c-bu">
                        <h2 className="h2 mt-4">Atrae al candidato que necesitas</h2>
                        <div className="car">
                            <img className="cardF" src={imagenes.img3} />
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

                        <Button TextName="Comienza ahora" />
                    </div>
                </article>

            </section>

        </>
    )
}
