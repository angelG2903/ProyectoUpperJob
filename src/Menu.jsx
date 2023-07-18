import { useState } from 'react';
import './menu.css';
import upperjob from './assets/Upperjob.svg';
import img from './assets/cardFernanda.svg';

export const Menu = () => {

    const [isActive, setActive] = useState(false);



  return (
    <>
        <button
            id="abrir" 
            className="abrir-menu"
            onClick={() => {
                setActive(!isActive)
            }}
        ><i className="bi bi-list"></i></button>
            
        <nav className={`nav ${isActive ? "visible" : "" }`} id="nav">

            <img className='logo-upper' src={upperjob}/>
            <button 
                className="cerrar-menu" 
                id="cerrar"
                onClick={() => {
                    setActive(!isActive)
                }}
            ><i className="bi bi-x"></i></button>

            <ul className="nav-list">
                <li className='act'><i className="bi bi-house-fill icons-menu"></i><a href="#">Home</a></li>
                <li className='act'><i className="bi bi-tags-fill icons-menu"></i><a href="#">Oferta</a></li>
                <li className='act'><i className="bi bi-calendar-fill icons-menu"></i><a href="#">Eventos</a></li>
                <li className='act'><i className="bi bi-cloud-arrow-up-fill icons-menu"></i><a href="#">Publicar ofertas</a></li>
                <li className='act'><i className="bi bi-briefcase-fill icons-menu"></i><a href="#">Mentorías</a></li>

                <li className='act-end'><i className="bi bi-box-arrow-right icons-men"></i><a href="#">Logout</a></li>
                <div className='sett'>
                    <figure className='image img-user'>
                        <img className='is-rounded' src={img}/>
                    </figure>
                    <p className='user'>Diana Robertson</p>
                    <p className='text-perfil'>View profile</p>
                    <i className="bi bi-gear icon-sett"></i>
                </div>
            </ul>
        </nav>

    </>
  )
}
