import img4 from '../../../assets/visaPay.svg'
import logoN from '../../../assets/UpperJob.svg'
import payPal from '../../../assets/payPal.svg'
import { Button } from '../../atoms/button/Button'
import '../styles/VincularTarjeta.css'
import { IconoArrow } from '../../atoms/icono/IconoArrow'

export const VincularTarjeta = () => {
  return (
    <>
        <section className='margenes'>

            <IconoArrow/>

            <div className='imgs mb-5'>
                <img src={logoN} width={120} alt="" className="mt-5" />   
                <img src={img4} width={280} alt="" className="mt-5" />
                <h1 className='mt-3 textoSele'><b>Selecciona un método de pago</b></h1>
            </div>

            <Button TextName={"Vincula tu tarjeta"}/>
            <Button TextName={"Pagar con "} style={"payP mt-3"} icon={<img src={payPal} className='ml-2' alt=""/>}/>

        </section>

    
    </>
  )
}
