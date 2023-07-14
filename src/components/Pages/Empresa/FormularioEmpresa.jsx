import UpperJob from '../../../assets/UpperJob.svg'
import { StepperEmpresa } from '../../molecules/stepperEmpresa/StepperEmpresa'


export const FormularioEmpresa = () => {
  return (
    <>

        <section className="margenes">
            <div className='imgf mt-5'>
                <img src={ UpperJob } width={120} alt="" className="mt-5" />
                <h1 className="title1 mt-5 mb-5">Registro empresa</h1>
            </div>

            <StepperEmpresa />


        </section>

    </>
  )
}
