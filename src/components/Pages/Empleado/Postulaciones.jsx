import { ImagenRedonda, Button } from '../../atoms'
import { Navbar } from '../../organisms/navBar/Navbar'
import imagenes from '../../../assets/imagenes';
import './styles/postulaciones.css'

export const Postulaciones = () => {
  return (
    <>
        <section className='margenes'>
            <Navbar isLogin={ false }/>

            <div className='content-postu'>
              <h2 className='subtitle is-5 sub-pos'>Postulaciones</h2>
              <ImagenRedonda Image={imagenes.noPostular}/>
              <p className='text-pos'>Todavia no te has postulado en ninguna oferta</p>
              <Button TextName='Buscar empleos'/>
            </div>
            
        </section>
    </>
  )
}
