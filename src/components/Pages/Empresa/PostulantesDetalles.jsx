import { Navbar } from '../../organisms/navBar/Navbar';
import imagenes from '../../../assets/imagenes';
import { Button } from '../../atoms';
import './styles/postulantesD.css';

export const PostulantesDetalles = () => {
    return (
        <>
            <section className='margenes'>

                <Navbar isLogin={false}/>

                <div className="content-Postu-Deta">
                    <figure className="carImage1">
                        <img src={imagenes.img4} />
                        <h2 className='title-h2'>Diseñador UX/UI</h2>
                        <p className='text-p'>
                            Calle Nueva, 35 Motril, Granada 18600
                            Numero  694204850 <br />
                            Correo: gonperezv@outlook.com
                        </p>
                    </figure>

                    <div className='card-PerfilP'>
                        <h2>Perfil profesional</h2>

                        <div className='icons-p'>
                            <div className='icons-2'>
                                <i className="fa-solid fa-folder"></i>
                                <p>Experiencia</p>
                            </div>
                            <div className='icons-p2'>
                                <p>
                                    UX Designer con 8 años de experiencia en esta actividad.
                                </p>
                            </div>

                            <div className='icons-2'>
                                <i className="fa-solid fa-graduation-cap"></i>
                                <p>Formación académica</p>
                            </div>
                            <div className='icons-p2'>
                                <p>
                                    Junio 2014 <br />
                                    Junio 2012 <br />
                                    Aptitudes
                                </p>
                            </div>

                            <div className='icons-2'>
                                <i className="fa-solid fa-code"></i>
                                <p>Idiomas</p>
                            </div>
                            <div className='icons-p2'>
                                <p>
                                    Español: idioma nativo <br />
                                    Inglés: C1 - Avanzado
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='btns-content-PostuDe'>
                    <Button TextName="Ver CV"/>
                    <Button TextName="Liberar datos"/>
                </div>

            </section>

        </>
    )
}
