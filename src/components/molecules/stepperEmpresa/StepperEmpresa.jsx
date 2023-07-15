import { useState } from "react";
import { Input } from "../../atoms/input/Input"
import { Select } from "../../atoms/select/Select"
import { Button } from "../../atoms/button/Button";
import { CheckBoxTerms } from "../../atoms/checkBoxT/CheckBoxTerms";
import './style.css'
import { TextArea } from "../../atoms/textArea/TextArea";

export const StepperEmpresa = () => {

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
            <div className="progress-bar2">
                <div className={`progress ${step > 0 ? 'progress-active' : ''}`}>1</div>
                <div className={`progress ${step >= 2 ? 'progress-active' : ''}`}>2</div>
                <div className={`progress ${step >= 3 ? 'progress-active' : ''}`}>3</div>
            </div>
            <div className="progress-bar-ti2">
                <p className={`progress2 ${step > 0 ? 'progress-active2' : ''}`}>Personal info</p>
                <p className={`progress2 ${step >= 2 ? 'progress-active2' : ''}`}>Personal info</p>
                <p className={`progress2 ${step >= 3 ? 'progress-active2' : ''}`}>Personal info</p>
            </div>
            <form>
                {step === 1 && <div className="step-content step-c2">
                    <Input TextName={"Nombre"} />
                    <Input TextName={"Apellidos"} />
                    <Input TextName={"E-mail de acceso"} />
                    <Input TextName={"Contraseña"} />
                    <Input TextName={"Nombre de la empresa"} />

                </div>}
                {step === 2 && <div className="step-content step-c2">

                    <div className="selects2">
                        <Select TextName={"País"} styles="medium-select"/>
                        <Select TextName={"Estado"} styles="medium-select"/>
                    </div>
                    <Select TextName={"Ciudad"} styles="mt-4 medium-select"/>
                    <TextArea TextName={"Dirección"} styles={"mt-4"}/>
                    <Select TextName={"Selecciona el sector"} styles="mt-5 is-fullwidth"/> 
                </div>}

                {step === 3 && <div className="step-content step-c3">

                    <Select TextName={"N° de trabajadores"}/>
                    <Input TextName={"Ingresa link de Facebook de empresa"}/>    
                    <Input TextName={"Ingresa link de Twitter de empresa"}/>   
                    
                    <CheckBoxTerms />
                    
                </div>}
            </form>

            <Button TextName={"Continuar después"} style={"mb-5"}/>
            
            <div className="btnopc">
                <button onClick={prevStep} disabled={step === 1} className="stepper-button button is-rounded isBlack">
                    Regresar
                </button>
                <button onClick={nextStep} disabled={step === 3} className={`stepper-button button is-rounded isBlack ${step === 3 ? 'd-none' : ''}`}>
                    Siguiente
                </button>
                <button disabled={step <= 2} className={`stepper-button button is-rounded isBlack ${step <= 2 ? 'd-none' : ''}`}>
                    Registrarse
                </button>

            </div>
        </div>
        
        
    </>
  )
}
