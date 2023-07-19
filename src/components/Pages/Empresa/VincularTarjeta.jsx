import { Button, IconoArrow } from '../../atoms'
import imagenes from '../../../assets/imagenes'
import './styles/VincularTarjeta.css'

export const VincularTarjeta = () => {
  return (
    <>
        <section className='margenes'>

            <IconoArrow/>

            <div className='imgs mb-5'>
                <img src={imagenes.UpperJob} width={120} alt="" className="mt-5" />   
                <img src={imagenes.visaPay} width={280} alt="" className="mt-5" />
                <h1 className='mt-3 textoSele'><b>Selecciona un método de pago</b></h1>
            </div>

            <Button TextName={"Vincula tu tarjeta"}/>
            <Button TextName={"Pagar con "} style={"payP mt-3"} icon={<img src={imagenes.payPal} className='ml-2' alt=""/>}/>

        </section>

    
    </>
  )
}
