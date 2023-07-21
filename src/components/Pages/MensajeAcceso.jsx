import imagenes from '../../assets/imagenes'
import './styles/mensajeA.css'

export const MensajeAcceso = () => {
    return (
        <>
            <div className='img'>
                <img src={imagenes.img5} className='imgAcceso'/>
            </div>

            <div className='logo'>
                <img src={imagenes.UpperJob}  className='imgUppAcc'/>
            </div>

            <div className='text'>
                <h2>Bienvenido</h2>
            </div>
        </>
    )
}
