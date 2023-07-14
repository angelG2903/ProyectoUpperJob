import { Input } from "../../atoms/input/Input"


export const FormInformes = () => {
  return (
    <>
      <form className="form">
          <Input TextName="Nombre" />
          <Input TextName="Apellidos" />
          <Input TextName="E-mail" />
      </form>
    </>
  )
}
