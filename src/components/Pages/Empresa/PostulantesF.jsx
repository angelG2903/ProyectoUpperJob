import { CardPostulantesF } from '../../molecules/cardPostulantesF/CardPostulantesF';
import { Navbar } from '../../organisms/navBar/Navbar';
import { Search } from '../../atoms/search/Search';
import { Select } from '../../atoms/select/Select';

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
