import React from 'react'
import { Navbar } from '../../organisms/navBar/Navbar'
import { ImagenRedonda } from '../../atoms/imagenRedonda/ImagenRedonda'
import img from '../../../assets/cardFernanda.svg';
import './styles/postulaciones.css'
import { Button } from '../../atoms/button/Button';

export const Postulaciones = () => {
  return (
    <>
        <section className='margenes'>
            <Navbar/>
            <h2 className='subtitle is-5 sub-pos'>Postulaciones</h2>
            <ImagenRedonda Image={img}/>
            <p className='text-pos'>Todavia no te has postulado en ninguna oferta</p>
            <Button TextName='Buscar empleos'/>
        </section>
    </>
  )
}
