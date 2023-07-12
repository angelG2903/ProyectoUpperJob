import img5 from '../../assets/5.png';
import Upperjob from '../../assets/Upperjob.svg';

export const MensajeAcceso = () => {
    return (
        <>
            <div className='img'>
                <img src={img5}/>
            </div>

            <div className='logo'>
                <img src={Upperjob} />
            </div>

            <div className='text'>
                <h2>Bienvenido</h2>
            </div>
        </>
    )
}
