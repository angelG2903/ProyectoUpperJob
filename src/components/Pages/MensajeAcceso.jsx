import imagenes from '../../assets/imagenes'
import './styles/mensajeA.css'

export const MensajeAcceso = () => {
    return (
        <>
            <div className='img'>
                <img src={imagenes.img5}/>
            </div>

            <div className='logo'>
                <img src={imagenes.UpperJob} />
            </div>

            <div className='text'>
                <h2>Bienvenido</h2>
            </div>
        </>
    )
}
