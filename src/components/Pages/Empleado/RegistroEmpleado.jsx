import imagenes from '../../../assets/imagenes'
import { Button, ButtonGoogle } from '../../atoms'

export const RegistroEmpleado = () => {
  return (
    <>
        <section className='margenes'>

          <div className='content-img-btnRE'>
            
            <div className='imgs mb-5'>
                <img src={imagenes.img4} alt="" className="mt-5 img4StyleRE" />
                <img src={imagenes.UpperJob} alt="" className="mt-5 upperStyleRE" />   
            </div>

            <div className='content-btnsRE'>
              <ButtonGoogle SrcImg={imagenes.google}/>
              <Button TextName={"Registrarse con correo"} style={"mt-4"}/>
              <Button TextName={"Ya cuento con una cuenta"} style={"mt-4"}/>

            </div>
          </div>  
        </section>
        

    </>
  )
}
