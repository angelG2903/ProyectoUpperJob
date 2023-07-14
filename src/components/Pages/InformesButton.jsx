import { Link } from "react-router-dom"
import { Button } from "../atoms/button/Button"
import { Select } from "../atoms/select/Select"
import { TextArea } from "../atoms/textArea/TextArea"
import { FormInformes } from "../molecules/form/FormInformes"
import footer from '../../assets/footer.svg'
import './styles/informes.css'
import { IconoArrow } from "../atoms/icono/IconoArrow"

export const InformesButton = () => {
    return (
        <>
            <section className="margenes">
                <Link to={"/"}> <IconoArrow/></Link>
                
                <p className="tit">
                    Pedir informes
                </p>

                <FormInformes />
                <Select TextName="Tipo de consulta"/>
                <TextArea TextName="Dirección"/>
                <Button TextName="Enviar" style={"mt-5"}/>
            </section>

            <img className='fot' src={footer}/>

        </>
    )
}
