import { Button } from "../atoms/button/Button"
import { Input } from "../atoms/input/Input"
import { Select } from "../atoms/select/Select"
import { TextArea } from "../atoms/textArea/TextArea"


export const InformesButton = () => {
    return (
        <>
            <i className="fa-solid fa-arrow-left fa-2xl arrow"></i>

            <p className="tit">
                Pedir informes
            </p>

            <Input/>
            <Select TextName="Tipo de consulta"/>
            <TextArea/>
            <Button TextName="Enviar"/>

        </>
    )
}
