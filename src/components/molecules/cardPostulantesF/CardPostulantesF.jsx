import vector from '../../../assets/cardFernanda.svg';
import './style.css';

export const CardPostulantesF = () => {
    return (
        <>
            <div className='cardPos'>
                <div className='cardImage'>
                    <img className='is-rounded' src={vector}/>
                </div>

                <h2>Fernanda Zarate F</h2>
                <p>Analista Programador</p>

                <div className='redes'>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>

                <div className='textFinal'>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
                </div>
            </div>

        </>
    )
}
