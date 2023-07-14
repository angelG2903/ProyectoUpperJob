import { Plan } from "../../molecules/plan/Plan";
import { Navbar } from "../../organisms/navBar/Navbar";
import whatsApp from '../../../assets/WhatsApp.png';
import footer from '../../../assets/footer.svg';
import '../styles/contratarP.css';

export default function ContratarPlan() {
    return (
        <>
            <section className="margenes">
                <Navbar/>

                <div className="notification is-info">
                    <button className="delete"></button>
                    Su perfil no esta completo favor de completar su registro
                </div>

                <Plan Title="Plan basico"/>
                <Plan Title="Plan basico"/>
                <Plan Title="Plan basico"/>
            
                <div className='inf'>
                    <img src={whatsApp} alt="" />
                </div>

            </section>
            
            <img className='fot' src={footer}/>
        </>
    )
}
