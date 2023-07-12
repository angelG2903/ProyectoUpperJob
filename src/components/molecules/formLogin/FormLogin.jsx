import { Button } from "../../atoms/button/Button"
import { Input } from "../../atoms/input/Input"


export const FormLogin = () => {
  return (
    <>

        <form>
            <Input TextName={"Correo"}/>
            <Input TextName={"Contraseña"}/>
            <Button TextName={"Iniciar"} style={"mt-4 mb-5"}/>
        </form>
    </>
  )
}
