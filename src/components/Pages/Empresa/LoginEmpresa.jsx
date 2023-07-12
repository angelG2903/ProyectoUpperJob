import img4 from '../../../assets/4.svg'
import logoN from '../../../assets/UpperJob.svg'
import google from '../../../assets/google.svg'
import footer from '../../../assets/footer.svg'
import { ButtonGoogle } from '../../atoms/buttonGoogle/ButtonGoogle'
import { FormLogin } from '../../molecules/formLogin/FormLogin'
import '../styles/loginEmpresa.css'

export const LoginEmpresa = () => {
  return (
    <>
        <section className="margenes">
            <div className='imgs mb-5'>
                <img src={img4} width={280} alt="" className="mt-5" />
                <img src={logoN} width={120} alt="" className="mt-5" />   
            </div>

            <FormLogin />
            <ButtonGoogle SrcImg={google}/>
            <div className='forget'>
                <p>Forget your password?</p>
            </div>
        </section>
        <img className='' src={footer} alt="" />
    </>
  )
}
