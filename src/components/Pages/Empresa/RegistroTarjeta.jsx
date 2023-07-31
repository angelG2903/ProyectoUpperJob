import imagenes from '../../../assets/imagenes'
import { StepperTarjeta } from '../../molecules'

export const RegistroTarjeta = () => {
  return (
    <>
    
        <section className="margenes">
            <div className='imgf mt-5'>
                <img src={ imagenes.UpperJob } width={120} alt="" className="mt-5" />
                <h1 className="title1 mt-5 mb-5">Agregar una tarjeta de crédito o débito</h1>
            </div>

            <StepperTarjeta />


        </section>
    
    </>
  )
}
