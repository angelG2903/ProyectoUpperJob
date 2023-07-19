import { Button } from "../../atoms/button/Button"
import { Input } from "../../atoms/input/Input"


export const FormLogin = ({ onSubmit }) => {
  return (
    <>

        <form onSubmit={onSubmit}>
            <Input 
              TextName={"Correo"}
              name={"correo"}
              type={"email"}
              // value={""}
              // onChange={""}
            />
            <Input 
              TextName={"Contraseña"}
              name={"password"}
              // value={""}
              type={"password"}
              // onChange={""}
            />
            <Button 
              TextName={"Iniciar"} 
              style={"mt-4 mb-5"}
              type={"submit"}
            />
        </form>
    </>
  )
}
