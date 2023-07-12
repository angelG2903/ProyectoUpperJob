import img4 from '../../assets/4.svg'
import logoN from '../../assets/UpperJob.svg'
import google from '../../assets/google.svg'
import whatsApp from '../../assets/whatsApp.png'
import footer from '../../assets/footer.svg'
import { Button } from '../atoms/button/Button'
import { ButtonGoogle } from '../atoms/buttonGoogle/ButtonGoogle'
import { ButtonSmall } from '../atoms/buttonSmall/ButtonSmall'

export const RegistroEmpresa = () => {
  return (
    <>
        <section className='margenes'>
        <div className='imgs mb-5'>
            <img src={img4} width={280} alt="" className="mt-5" />
            <img src={logoN} width={120} alt="" className="mt-5" />   
        </div>

        <ButtonGoogle SrcImg={google}/>
        <Button TextName={"Registrarse con correo"}/>
        <Button TextName={"Ya cuento con una cuenta"}/>

        <div className='inf'>
            <ButtonSmall TextName={"Informes"} />
            <img src={whatsApp} alt="" />
        </div>

        
    
        </section>
        <img className='fot' src={footer} alt="" />

    </>
    
  )
}
