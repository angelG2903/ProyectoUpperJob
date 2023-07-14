import { Button } from "../../atoms/button/Button"
import { Search } from "../../atoms/search/Search"
import { Select } from "../../atoms/select/Select"
import { Card } from "../../molecules/Card"
import { Navbar } from "../../organisms/navBar/Navbar"
import imgPerson from '../../../assets/imgPerson.svg'


export const PrincipalEmpleado = () => {
  return (
    <>
        <Navbar />
        <h1 className="title1 mt-4">Encuentra tu primer empleo</h1>
        <Search TextName="Search"/>
        <Select TextName="Categoría"/>
        <Select TextName="País"/>
        <Button TextName="Buscar"/>
        <img src={imgPerson} alt="" className="mt-5" />
        <h1 className="title1 mt-4">Urgently Need</h1>
        <Card />
    </>
  )
}
