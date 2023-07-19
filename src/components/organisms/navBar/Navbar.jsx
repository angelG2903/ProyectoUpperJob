import { useState } from 'react'
import UpperJob from '../../../assets/UpperJob.svg'
import './style.css'
import { Link } from 'react-router-dom'


export const Navbar = ({ isLogin=true }) => {

  const [ isActive, setActive ]= useState(false)


  return (

    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">

          <a 
            onClick={() => {
              setActive(!isActive)
            }}
            role="button" 
            className= {`navbar-burger navbar-burgerNone ${isActive ? "is-active": ""}`} 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
          <a className="navbar-item navbar-itemNone" href="#">
            <img src={UpperJob} width="112" height=""/>
          </a>
          {isLogin === true && <Link className="button is-rounded buttonPr buttM" to="registro">Iniciar sesión</Link>}
          
          
        </div>

        <div 
          id="navMenu" 
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Ofertas
            </a>
            <a className="navbar-item">
              Eventos
            </a>
            <a className="navbar-item">
              Publicar ofertas
            </a>
            <a className="navbar-item">
              Mentorias
            </a>
            <a className="navbar-item">
              LogoutVboton
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {isLogin === true && <Link className=" button is-rounded buttonPr buttMnone" to="registro">Iniciar sesión</Link>}
            </div>
          </div>
        </div>
    </nav>
  )
}
