import { useState } from "react";
import { Input } from "../../atoms/input/Input"
import { Select } from "../../atoms/select/Select"
import './stepperEm.css'
import { Button } from "../../atoms/button/Button";
import { File } from "../../atoms/file/File";
import { CheckBoxTerms } from "../../atoms/checkBoxT/CheckBoxTerms";

export const StepperEm = () => {

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
  }

  return (
    <>
        <div className="stepper-container">
            <div className="progress-bar">
                <div className={`progress ${step > 0 ? 'progress-active' : ''}`}>1</div>
                <div className={`progress ${step >= 2 ? 'progress-active' : ''}`}>2</div>
            </div>
            <div className="progress-bar-ti">
                <p className={`progress2 ${step > 0 ? 'progress-active2' : ''}`}>Personal info</p>
                <p className={`progress2 ${step >= 2 ? 'progress-active2' : ''}`}>Personal info</p>
            </div>
            <form>
                {step === 1 && <div className="step-content">
                    <Input TextName={"Nombre"} />
                    <Input TextName={"Apellidos"} />
                    <Input TextName={"E-mail de acceso"} />
                    <Input TextName={"Número de teléfono"} />
                    <Select TextName={"Estado de procedencia"}/>

                </div>}
                {step === 2 && <div className="step-content">

                    <Select TextName={"Puesto de trabajo"}/>
                    <Input TextName={"contraseña"}/>    
                    <Input TextName={"Confirmar contraseña"}/>   
                    <File TextName={"Fotografia"}/>
                    <File TextName={"Subir CV"}/>
                    <File TextName={"Subir carta de presentación"}/>
                    <CheckBoxTerms />
                    
                </div>}
            </form>

            <Button TextName={"Continuar despues"} style={"mb-5"}/>
            
            <div className="btnopc">
                <button onClick={prevStep} disabled={step === 1} className="stepper-button button is-rounded isBlack">
                    Regresar
                </button>
                <button onClick={nextStep} disabled={step === 2} className={`stepper-button button is-rounded isBlack ${step === 2 ? 'd-none' : ''}`}>
                    Siguiente
                </button>
                <button disabled={step === 1} className={`stepper-button button is-rounded isBlack ${step === 1 ? 'd-none' : ''}`}>
                    Guardar
                </button>

            </div>
        </div>
        
        
    </>
  )
}
