import footer from '../../../assets/footer.svg'
import { useState } from 'react';
import '../styles/modal.css';

export const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
    setIsOpen(true);
    };

    const closeModal = () => {
    setIsOpen(false);
    };

    return (
        <>
            <section className='margenes'>
                    <div>
                        <button className="button is-primary" onClick={openModal}>Abrir Modal</button>
                        {isOpen && (
                            <div className="modal is-active">
                                <div className="modal"></div>
                                <div className="modal-content">
                                    <div className="box">
                                        <i className="fa-solid fa-circle-check"></i>
                                        <h2>Se a registrado con éxito</h2>
                                        <button className="button is-rounded is-fullwidth big btnB" onClick={closeModal}>Continuar</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
            </section>
                            
            <img className='footerImg' src={footer} alt="" />
        </>
    );
};

