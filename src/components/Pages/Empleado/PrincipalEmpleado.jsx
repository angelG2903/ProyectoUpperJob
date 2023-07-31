import { Button, Search, Select } from "../../atoms"
import { Card } from "../../molecules"
import { Navbar } from "../../organisms/navBar/Navbar"
import imagenes from "../../../assets/imagenes"
import './styles/principalEmpleado.css'

export const PrincipalEmpleado = () => {

  const categoria = [
    { label: 'Option', value: 'Option'}
  ]

  const pais = [
    { label: 'Option', value: 'Option'}
  ]

  return (
    <>
      <section className="margenes">
        <Navbar />
        
        <div className="u-content-InpImgPEm">
          <div className="content-InpPrinEmple">
            <h1 className="title1 mt-4">Encuentra tu primer empleo</h1>
            <Search TextName="Search" styles={"sea-pEmsty"}/>
            <Select TextName="Categoría" selres="" optio={categoria}/>
            <Select TextName="País" styles="mt-4 is-fullwidth" selres="" optio={pais}/>
            <Button TextName="Buscar" style={"mt-4"}/>
          </div>
          <img src={imagenes.imgPerson} className="img-cont-prinEmpl" alt="" />
        </div>
        <h1 className="title1 mt-4">Urgently Need</h1>
        <div className="content-cards-PrinEmpl">
          <Card />
          <Card />
          <Card />

        </div>
      </section>
    </>
  )
}
