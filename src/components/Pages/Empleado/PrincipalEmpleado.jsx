import { Button, Search, Select } from "../../atoms"
import { Card } from "../../molecules"
import { Navbar } from "../../organisms/navBar/Navbar"
import imagenes from "../../../assets/imagenes"


export const PrincipalEmpleado = () => {
  return (
    <>
      <section className="margenes">
        <Navbar />
        <h1 className="title1 mt-4">Encuentra tu primer empleo</h1>
        <Search TextName="Search"/>
        <Select TextName="Categoría"/>
        <Select TextName="País" styles="mt-4 is-fullwidth"/>
        <Button TextName="Buscar" style={"mt-4"}/>
        <img src={imagenes.imgPerson} alt="" className="mt-5" />
        <h1 className="title1 mt-4">Urgently Need</h1>
        <Card />
      </section>
    </>
  )
}
