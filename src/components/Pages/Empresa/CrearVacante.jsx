import imagenes from '../../../assets/imagenes';
import { IconoArrow, Input, Select, TextArea, Button } from "../../atoms";
import './styles/crearV.css';

export const CrearVacante = () => {
    return (
        <>
            <section className="margenes">
                <IconoArrow/>

                <div className='responsiveCrear-vaca'>
                    <div className="log">
                        <img src={imagenes.UpperJob} alt="" />
                        <p>Crear vacante</p>
                    </div>
                    <form className='form-cVacante'>
                        <Input TextName="Puesto" styles={"mb-4"}/>
                        <Select TextName="Género" styles={"is-fullwidth"}/>
                        <Select TextName="Estado de procendencia" styles={"mt-4 is-fullwidth"} />
                        <TextArea TextName="Skills" styles={"mt-4"} styleText={"txtCVacante"}/>
                        <TextArea TextName="Descripción" styles={"mt-4"} styleText={"txtCVacante"}/>
                        
                        <Input TextName="Número de vacantes" styles={"mt-4 mb-5"}/>
                        

                        <Button TextName="Guardar" style={"mt-5 masGcVacante"}/>
                    </form>
                    
                </div>

            </section>

        </>   
    )
}
