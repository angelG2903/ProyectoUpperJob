import img4 from '../../../assets/4.svg'
import logoN from '../../../assets/UpperJob.svg'
import google from '../../../assets/google.svg'
import { Button } from '../../atoms/button/Button'
import { ButtonGoogle } from '../../atoms/buttonGoogle/ButtonGoogle'

export const RegistroEmpleado = () => {
  return (
    <>
        <section className='margenes'>
        <div className='imgs mb-5'>
            <img src={img4} width={280} alt="" className="mt-5" />
            <img src={logoN} width={120} alt="" className="mt-5" />   
        </div>

        <ButtonGoogle SrcImg={google}/>
        <Button TextName={"Registrarse con correo"} style={"mt-4"}/>
        <Button TextName={"Ya cuento con una cuenta"} style={"mt-4"}/>
    
        </section>
        

    </>
  )
}
