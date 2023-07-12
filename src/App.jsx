import { Button } from "./components/atoms/Button"
import { Navbar } from "./components/organismos/Navbar"
import { Search } from "./components/atoms/Search"
import { Select } from "./components/atoms/Select"
import imgPerson from './assets/imgPerson.svg'
import { Card } from "./components/molecules/Card"

function App() {

  return (
    <>
      <Navbar />
      <h1 className="title1 mt-4">Encuentra tu primer empleo</h1>
      <Search />
      <Select TextName="Categoría"/>
      <Select TextName="País"/>
      <Button TextName="Buscar"/>
      <img src={imgPerson} alt="" className="mt-5" />
      <h1 className="title1 mt-4">Urgently Need</h1>
      <Card />
      
    </>
  )
}

export default App
