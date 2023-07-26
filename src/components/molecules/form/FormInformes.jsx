import { Input, Select, TextArea, Button } from "../../atoms"
import './style.css'

export const FormInformes = ({onSubmit}) => {

  const tConsulta = [
    {label: 'De seleccion', value: 'De seleccion'},
  ]

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
          <Select TextName="Tipo de consulta" styles="mt-4 is-fullwidth" optio={tConsulta}/>

          <TextArea 
            styles={"mt-4"}
            TextName="Dirección" 
            styleText={"textarea3"}
            name={"direccion"}
            // value={""}
            type={"text"}
            // onChange={""}
          />

          <Button 
            TextName="Enviar" 
            style={"mt-5 masgrandeInfo"}
            type={"submit"}
          />
      </form>
    </>
  )
}
