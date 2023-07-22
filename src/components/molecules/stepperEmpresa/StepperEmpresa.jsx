import { useState } from "react";
import { Input, Select, Button, CheckBoxTerms, TextArea } from "../../atoms"
import './style.css'

export const StepperEmpresa = ({onsubmit}) => {

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
            <form onSubmit={onsubmit}>
                {step === 1 && <div className="step-content step-c2">
                    <Input 
                        TextName={"Nombre"} 
                        name={"nombre"}
                        type={"text"}
                        /* value={""}
                        onChange={""} */
                    />
                    <Input 
                        styles={"mt-4"}
                        TextName={"Apellidos"} 
                        name={"apellidos"}
                        type={"text"}
                        /* value={""}
                        onChange={""} */
                    />
                    <Input 
                        styles={"mt-4"}
                        TextName={"E-mail de acceso"} 
                        name={"email"}
                        type={"email"}
                        /* value={""}
                        onChange={""} */
                    />
                    <Input 
                        styles={"mt-4"}
                        TextName={"Contraseña"} 
                        name={"password"}
                        type={"password"}
                        /* value={""}
                        onChange={""} */
                    />
                    <Input 
                        styles={"mt-4"}
                        TextName={"Nombre de la empresa"} 
                        name={"nombreEmpresa"}
                        type={"text"}
                        /* value={""}
                        onChange={""} */
                    />

                </div>}
                {step === 2 && <div className="step-content step-c2">

                    <div className="selects2">
                        <Select TextName={"País"} styles="medium-select" selres=""/>
                        <Select TextName={"Estado"} styles="medium-select" selres=""/>
                    </div>
                    <Select TextName={"Ciudad"} styles="mt-4 medium-select" selres=""/>
                    <TextArea 
                        TextName={"Dirección"} 
                        styles={"mt-4"}
                        name={"direccion"}
                        type={"text"}
                        /* value={""}
                        onChange={""} */
                    />
                    <Select TextName={"Selecciona el sector"} styles="mt-5 is-fullwidth"/> 
                </div>}

                {step === 3 && <div className="step-content step-c3">

                    <Select TextName={"N° de trabajadores"}/>
                    <Input
                        styles={"mt-4"} 
                        TextName={"Ingresa link de Facebook de empresa"}
                        name={"linkFacebook"}
                        type={"text"}
                        /* value={""}
                        onChange={""} */
                    />    
                    <Input
                        styles={"mt-4"} 
                        TextName={"Ingresa link de Twitter de empresa"}
                        name={"linkTwitter"}
                        type={"text"}
                        /* value={""}
                        onChange={""} */
                    />   
                    
                    <CheckBoxTerms />
                    
                </div>}
            </form>

            <Button 
                TextName={"Continuar después"} 
                style={"mb-5 masgrande-FEmpres"}
                // onClick={""}
            />
            
            <div className="btnopc">
                <button onClick={prevStep} disabled={step === 1} className="stepper-button button is-rounded isBlack">
                    Regresar
                </button>
                <button onClick={nextStep} disabled={step === 3} className={`stepper-button button is-rounded isBlack ${step === 3 ? 'd-none' : ''}`}>
                    Siguiente
                </button>
                <button disabled={step <= 2} type="submit" className={`stepper-button button is-rounded isBlack ${step <= 2 ? 'd-none' : ''}`}>
                    Registrarse
                </button>

            </div>
        </div>
        
        
    </>
  )
}
