import { Link } from "react-router-dom"
import { IconoArrow } from "../../atoms"
import { FormInformes } from "../../molecules"
import './styles/informes.css'

export const InformesButton = () => {
    return (
        <>
            <section className="margenes">
                <Link to={"/"}> <IconoArrow/></Link>
                
                <p className="tit">
                    Pedir informes
                </p>

                <FormInformes />
                
            </section>
            

        </>
    )
}
