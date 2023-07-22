import { Plan } from "../../molecules";
import { Navbar } from "../../organisms/navBar/Navbar";
import imagenes from '../../../assets/imagenes'
import './styles/contratarP.css';
import { useState } from "react";

export function ContratarPlan() {

    const [showNotification, setShowNotification] = useState(true);

    const handleCloseNotification = () => {
        setShowNotification(false);
    };


    return (
        <>
            <section className="margenes">
                <Navbar isLogin={false}/>

                {showNotification &&(    
                    <div className="notification is-info">
                        <button className="delete" onClick={handleCloseNotification}></button>
                        Su perfil no esta completo favor de completar su registro
                    </div>
                )}
                <h1 className="txtContrPl">Contratar un plan ahora</h1>
                <div className="content-Cplanes">
                    <Plan Title="Plan basico" Text="$200.00 mnx"/>
                    <Plan Title="Plan basico" Text="$200.00 mnx"/>
                    <Plan Title="Plan basico" Text="$200.00 mnx"/>
                </div>

                
            
                <div className='inf-1'>
                    <img src={imagenes.whatsApp} alt="" />
                </div>

            </section>
            
        </>
    )
}
