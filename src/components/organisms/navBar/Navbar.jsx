import { useState } from 'react'
import UpperJob from '../../../assets/UpperJob.svg'
import './style.css'


export const Navbar = () => {

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
          <a className="button is-rounded buttonPr buttM">Iniciar sesión</a>
          
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
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <a className=" button is-rounded buttonPr buttMnone">Iniciar sesión</a>
            </div>
          </div>
        </div>
    </nav>
  )
}
