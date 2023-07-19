import { CardPostulantesF } from '../../molecules';
import { Navbar } from '../../organisms/navBar/Navbar';
import { Search, Select } from '../../atoms';

export const PostulantesF = () => {
    return (
        <>
            <section className="margenes">
                
                <Navbar/>
                <Search TextName="Buscar aplicantes"/>
                <Select TextName="Habilidades"/>
                <CardPostulantesF/>
                <CardPostulantesF/>

            </section>
        
        </>
    )
}
