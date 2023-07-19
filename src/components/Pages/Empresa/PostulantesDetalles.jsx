import { Navbar } from '../../organisms/navBar/Navbar';
import imagenes from '../../../assets/imagenes';
import { Button } from '../../atoms';
import './styles/postulantesD.css';

export const PostulantesDetalles = () => {
    return (
        <>
            <section className='margenes'>
                <Navbar/>
            </section>
            <div className="card carPost">
                <div className="card-image carImage1">
                    <figure className="image">
                        <img src={imagenes.img4} alt="Placeholder image" width="250" height="229"/>
                        <h2 className='title-h2'>Diseñador UX/UI</h2>
                        <p className='text-p'>
                            Calle Nueva, 35 Motril, Granada 18600
                            Numero  694204850 <br />
                            Correo: gonperezv@outlook.com
                        </p>
                    </figure>
                </div>
            </div>

            <section className='margenes'>
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

                <Button TextName="Ver CV"/>
                <br />
                <Button TextName="Liberar datos"/>

            </section>

        </>
    )
}
