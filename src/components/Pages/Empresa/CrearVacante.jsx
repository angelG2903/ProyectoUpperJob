import { IconoArrow } from "../../atoms/icono/IconoArrow";
import logoN from '../../../assets/UpperJob.svg';
import '../styles/crearV.css';
import { Input } from "../../atoms/input/Input";
import { Select } from "../../atoms/select/Select";
import { TextArea } from "../../atoms/textArea/TextArea";
import { Button } from "../../atoms/button/Button";
import footer from '../../../assets/footer.svg';

export const CrearVacante = () => {
    return (
        <>
            <section className="margenes">
                <IconoArrow/>

                <div className="log">
                    <img src={logoN} alt="" />
                    <p>Crear vacante</p>
                </div>

                <Input TextName="Puesto"/>
                <Select TextName="Género"/>
                <Select TextName="Estado de procendencia"/>
                <TextArea TextName="Skills"/>
                <TextArea TextName="Descripción"/>

                <div className="inp">
                    <label>Número de vacantes</label>
                    <input className="input is-rounded" type="number" />
                </div>

                <Button TextName="Guardar"/>

            </section>

            <img className='fot' src={footer}/>

        </>   
    )
}
