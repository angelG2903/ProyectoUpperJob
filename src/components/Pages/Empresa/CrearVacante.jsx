import imagenes from '../../../assets/imagenes';
import { IconoArrow, Input, Select, TextArea, Button } from "../../atoms";
import './styles/crearV.css';

export const CrearVacante = () => {
    return (
        <>
            <section className="margenes">
                <IconoArrow/>

                <div className="log">
                    <img src={imagenes.UpperJob} alt="" />
                    <p>Crear vacante</p>
                </div>

                <Input TextName="Puesto" styles={"mb-4"}/>
                <Select TextName="Género" styles={"is-fullwidth"}/>
                <Select TextName="Estado de procendencia" styles={"mt-4 is-fullwidth"} />
                <TextArea TextName="Skills" styles={"mt-4"}/>
                <TextArea TextName="Descripción" styles={"mt-4"}/>

                <div className="inp mt-4">
                    <label>Número de vacantes</label>
                    <input className="input is-rounded" type="number" />
                </div>

                <Button TextName="Guardar"/>

            </section>

        </>   
    )
}
