import { Input, Select, TextArea, Button } from "../../atoms"


export const FormInformes = ({onSubmit}) => {
  return (
    <>
      <form 
        className="form"
        onSubmit={onSubmit}
      >
          <Input 
            TextName="Nombre" 
            name={"nombre"}
            type={"text"}
            // onChange={""}
            // value={""}
          />
          <Input 
            TextName="Apellidos" 
            name={"apellidos"}
            type={"text"}
            // onChange={""}
            // value={""}
          />
          <Input 
            TextName="E-mail"
            name={"mail"}
            type={"email"}
            // onChange={""}
            // value={""}
          />
          <Select TextName="Tipo de consulta"/>

          <TextArea 
            TextName="Dirección" 
            styleText={"textarea3"}
            name={"direccion"}
            // value={""}
            type={"text"}
            // onChange={""}
          />

          <Button 
            TextName="Enviar" 
            style={"mt-5"}
            type={"submit"}
          />
      </form>
    </>
  )
}
