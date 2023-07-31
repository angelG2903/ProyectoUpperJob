import { Button, IconoArrow } from '../../atoms'
import imagenes from '../../../assets/imagenes'
import './styles/VincularTarjeta.css'

export const VincularTarjeta = () => {
  return (
    <>
        <section className='margenes'>

            <IconoArrow/>

            <div className='content-vincular'>
              <div className='imgs mb-5'>
                  <img src={imagenes.UpperJob} alt="" className="mt-5 logoUpVincular" />   
                  <img src={imagenes.visaPay} alt="" className="mt-5 imgvistaPaVincular" />
                  <h1 className='mt-3 textoSele'><b>Selecciona un método de pago</b></h1>
              </div>

              <Button TextName={"Vincula tu tarjeta"}/>
              <Button TextName={"Pagar con "} style={"payP mt-4"} icon={<img src={imagenes.payPal} className='ml-2' alt=""/>}/>
            </div>
            

        </section>

    
    </>
  )
}
