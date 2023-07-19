import imagenes from '../../../assets/imagenes'
import { ButtonGoogle } from '../../atoms'
import { FormLogin } from '../../molecules'
import './styles/loginEmpresa.css'

export const LoginEmpresa = () => {
  return (
    <>
        <section className="margenes">
            <div className='imgs mb-5'>
                <img src={imagenes.img4} width={280} alt="" className="mt-5" />
                <img src={imagenes.UpperJob} width={120} alt="" className="mt-5" />   
            </div>

            <FormLogin />
            <ButtonGoogle SrcImg={imagenes.google}/>
            <div className='forget'>
                <p>Forget your password?</p>
            </div>
        </section>
    </>
  )
}
