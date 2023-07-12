import { Link } from "react-router-dom"
import { Button } from "../atoms/button/Button"
import { Select } from "../atoms/select/Select"
import { TextArea } from "../atoms/textArea/TextArea"
import { FormInformes } from "../molecules/form/FormInformes"

import './styles/informes.css'

export const InformesButton = () => {
    return (
        <>
            <section className="margenes">
                <Link to={"/"}> <i className="fa-solid fa-arrow-left fa-2xl arrow"></i> </Link>
                
                <p className="tit">
                    Pedir informes
                </p>

                <FormInformes />
                <Select TextName="Tipo de consulta"/>
                <TextArea/>
                <Button TextName="Enviar" style={"mt-5"}/>
            </section>

        </>
    )
}
