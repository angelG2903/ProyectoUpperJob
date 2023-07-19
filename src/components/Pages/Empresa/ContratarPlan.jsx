import { Plan } from "../../molecules";
import { Navbar } from "../../organisms/navBar/Navbar";
import imagenes from '../../../assets/imagenes'
import './styles/contratarP.css';

export function ContratarPlan() {
    return (
        <>
            <section className="margenes">
                <Navbar/>

                <div className="notification is-info">
                    <button className="delete"></button>
                    Su perfil no esta completo favor de completar su registro
                </div>

                <Plan Title="Plan basico" Text="$200.00 mnx"/>
                <Plan Title="Plan basico" Text="$200.00 mnx"/>
                <Plan Title="Plan basico" Text="$200.00 mnx"/>
            
                <div className='inf-1'>
                    <img src={imagenes.whatsApp} alt="" />
                </div>

            </section>
            
        </>
    )
}
