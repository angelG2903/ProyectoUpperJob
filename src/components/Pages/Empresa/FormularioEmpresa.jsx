import imagenes from '../../../assets/imagenes'
import { StepperEmpresa } from '../../molecules'


export const FormularioEmpresa = () => {
  return (
    <>

        <section className="margenes">
            <div className='imgf mt-5'>
                <img src={ imagenes.UpperJob } width={120} alt="" className="mt-5" />
                <h1 className="title1 mt-5 mb-5">Registro empresa</h1>
            </div>

            <StepperEmpresa />


        </section>

    </>
  )
}
