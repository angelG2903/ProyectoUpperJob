import imagenes from '../../../assets/imagenes'
import { Button, ButtonGoogle, ButtonSmall } from '../../atoms'


export const RegistroEmpresa = () => {
  return (
    <>
        <section className='margenes'>
        <div className='imgs mb-5'>
            <img src={imagenes.img4} width={280} alt="" className="mt-5" />
            <img src={imagenes.UpperJob} width={120} alt="" className="mt-5" />   
        </div>

        <ButtonGoogle SrcImg={imagenes.google}/>
        <Button TextName={"Registrarse con correo"} style={"mt-4"}/>
        <Button TextName={"Ya cuento con una cuenta"} style={"mt-4"}/>

        <div className='inf'>
            <ButtonSmall TextName={"Informes"} />
            <img src={imagenes.whatsApp} alt="" />
        </div>
        </section>

    </>
    
  )
}
