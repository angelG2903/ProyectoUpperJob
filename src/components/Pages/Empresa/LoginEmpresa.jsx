import imagenes from '../../../assets/imagenes'
import { ButtonGoogle } from '../../atoms'
import { FormLogin } from '../../molecules'
import './styles/loginEmpresa.css'

export const LoginEmpresa = () => {
  return (
    <>
        <section className="margenes">
          <div className='responsiveLoginEmpresa'>
            <div className='imgs mb-5'>
              <img src={imagenes.img4} alt="" className="mt-5 img4StyleLo" />
              <img src={imagenes.UpperJob} alt="" className="mt-5 upperStyleLo" />   
            </div>

            <div className='content-btnFormLoginE'>
              <FormLogin />
              <ButtonGoogle SrcImg={imagenes.google}/>
              <div className='forget'>
                  <p>Forget your password?</p>
              </div>
            </div>
          </div>
            
        </section>
    </>
  )
}
