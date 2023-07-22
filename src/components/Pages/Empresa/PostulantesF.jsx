import { CardPostulantesF } from '../../molecules';
import { Navbar } from '../../organisms/navBar/Navbar';
import { Search, Select } from '../../atoms';
import './styles/postuF.css'

export const PostulantesF = () => {
    return (
        <>
            <section className="margenes">
                
                <Navbar isLogin={false}/>
                {/* <Search TextName="Buscar aplicantes"/>
                <Select TextName="Habilidades"/> */}
                <div className="inputs-Postulantes">
                    <Search TextName="Buscar aplicantes" styles={"d-nonePostu tam-SePos"} />
                    <Select TextName="Habilidades" styles="is-fullwidth d-nonePostu" selres="selectrespons" />

                    <Search TextName="Buscar aplicantes" styles={"d-noP"} inputSe={"tamanioSea"}/>
                    <Select TextName="Habilidades" styles="d-noP" selres="" selecStyle={"tamanioSelect"}/>
                </div>
                <div className='content-postuF'>
                    <CardPostulantesF/>
                    <CardPostulantesF/>
                    <CardPostulantesF/>
                    <CardPostulantesF/>
                </div>
                

            </section>
        
        </>
    )
}
