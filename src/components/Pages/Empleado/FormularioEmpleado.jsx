import imagenes from '../../../assets/imagenes'
import { StepperEm } from '../../molecules'
import './styles/formularioEm.css'

export const FormularioEmpleado = () => {
  return (
    <>
        <section className='margenes'>
            <div className='imgf mt-5'>
                <img src={ imagenes.UpperJob } width={120} alt="" className="mt-5" />
                <h1 className="title1 mt-5 mb-5">Llenar datos de tu perfil</h1>
            </div>

            <StepperEm />
            
        </section>       

        
        
    </>
  )
}
