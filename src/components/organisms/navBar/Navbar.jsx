import { useState } from 'react'
import { Link } from 'react-router-dom'
import imagenes from '../../../assets/imagenes'
import UpperJob from '../../../assets/UpperJob.svg'
import './style.css'


export const Navbar = ({ isLogin=true }) => {

  const [ isActive, setActive ]= useState(false)


  return (
    <>
      <header>
          <div className='content-Nav-M'>
              <button 
                  onClick={() => {
                      setActive(!isActive)
                  }}
                  id="abrir" 
                  className="abrir-menu"
              ><i className="bi bi-list i-nav-burg"></i></button>
              <img className="logoo" src={imagenes.UpperJob} alt="Logo"/>
          </div>
          <nav className={`nav ${isActive ? 'visible' : ""}`} id="nav">
              <div className='content-logo-x'>
                  <img className="logoo" src={imagenes.UpperJobWhite} alt="Logo"/>
                  <button
                      onClick={() => {
                          setActive(!isActive)
                      }} 
                      className="cerrar-menu" 
                      id="cerrar"
                  ><i className="bi bi-x i-nav-x"></i></button>
              </div>
              <div className='content-uls'>
                  <ul className="nav-list">
                      <li className='ul-li-sty'><i className="bi bi-house-fill icons-menu"></i><a href="#">Home</a></li>
                      <li className='ul-li-sty'><i className="bi bi-tags-fill icons-menu"></i><a href="#">Ofertas</a></li>
                      <li className='ul-li-sty'><i className="bi bi-calendar-fill icons-menu"></i><a href="#">Eventos</a></li>
                      <li className='ul-li-sty'><i className="bi bi-cloud-arrow-up-fill icons-menu"></i><a href="#">Publicar ofertas</a></li>
                      <li className='ul-li-sty'><i className="bi bi-briefcase-fill icons-menu"></i><a href="#">Mentorias</a></li>
                  </ul>
                  
                  <div className='configura-log'>
                      <ul className="nav-list">
                          <li className='ul-li-sty'><i className="bi bi-box-arrow-right icons-menu"></i><a href="#">Logout</a></li>
                      </ul>

                      <div className='sett'>
                          <div className='cont-set'>
                              <img className='is-rounded img-user' src={imagenes.cardFernanda}/>
                              
                              <div className='name-viewPr'>
                                  <p className='user'>Diana Robertson</p>
                                  <p className='text-perfil'>View profile</p>
                              </div>

                          </div>

                          <i className="bi bi-gear icon-sett"></i>
                      </div>
                  </div>

              </div>

          </nav>
          {isLogin === true && <Link className="button is-rounded buttonPr  btn-small-log" to="/registro">Iniciar sesión</Link>}
      </header>
      {isLogin === true && <Link className="button is-rounded buttonPr  btn-v-small-log" to="/registro">Iniciar sesión</Link>}
  </>
  )
}
