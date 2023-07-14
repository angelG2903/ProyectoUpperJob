import UpperJob from '../../../assets/UpperJob.svg'
import { StepperEm } from '../../molecules/stepperEm/StepperEm'
import '../styles/formularioEm.css'

export const FormularioEmpleado = () => {
  return (
    <>
        <section className='margenes'>
            <div className='imgf mt-5'>
                <img src={ UpperJob } width={120} alt="" className="mt-5" />
                <h1 className="title1 mt-5 mb-5">Llenar datos de tu perfil</h1>
            </div>

            <StepperEm />
            
        </section>       

        
        
    </>
  )
}
