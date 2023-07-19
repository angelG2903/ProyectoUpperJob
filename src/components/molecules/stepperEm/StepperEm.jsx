import { useState } from "react";
import { Input, Select, Button, File, CheckBoxTerms } from "../../atoms"
import './stepperEm.css'

export const StepperEm = ({ onSubmit }) => {

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
            <form
                onSubmit={onSubmit}
            >
                {step === 1 && <div className="step-content">
                    <Input 
                        TextName={"Nombre"} 
                        name={"nombre"}
                        type={"text"}
                        /* value={""}
                        onChange={""} */
                    />
                    <Input 
                        TextName={"Apellidos"} 
                        name={"apellidos"}
                        type={"text"}
                        /* value={""}
                        onChange={""} */
                    />
                    <Input 
                        TextName={"E-mail de acceso"}
                        name={"email"}
                        type={"email"}
                        /* value={""}
                        onChange={""} */
                    />
                    <Input 
                        TextName={"Número de teléfono"} 
                        name={"numero"}
                        type={"tel"}
                        /* value={""}
                        onChange={""} */
                    />
                    <Select TextName={"Estado de procedencia"}/>

                </div>}
                {step === 2 && <div className="step-content">

                    <Select TextName={"Puesto de trabajo"}/>

                    <Input 
                        TextName={"contraseña"}
                        name={"password"}
                        type={"password"}
                        /* value={""}
                        onChange={""} */
                    />    

                    <Input 
                        TextName={"Confirmar contraseña"}
                        name={"confirm"}
                        type={"password"}
                        /* value={""}
                        onChange={""} */
                    />   
                    <File 
                        TextName={"Fotografia"}
                        name={"fotografia"}
                        /* value={""}
                        onChange={""} */
                    />

                    <File 
                        TextName={"Subir CV"}
                        name={"subirCv"}
                        /* value={""}
                        onChange={""} */
                    />
                    <File 
                        TextName={"Subir carta de presentación"}
                        name={"subirCarta"}
                        /* value={""}
                        onChange={""} */
                    />
                    <CheckBoxTerms />
                    
                </div>}
            </form>

            <Button 
                TextName={"Continuar despues"} 
                style={"mb-5"} 
                // onClick={""}
            />
            
            <div className="btnopc">
                <button onClick={prevStep} disabled={step === 1} className="stepper-button button is-rounded isBlack">
                    Regresar
                </button>
                <button onClick={nextStep} disabled={step === 2} className={`stepper-button button is-rounded isBlack ${step === 2 ? 'd-none' : ''}`}>
                    Siguiente
                </button>
                <button disabled={step === 1} type="submit" className={`stepper-button button is-rounded isBlack ${step === 1 ? 'd-none' : ''}`}>
                    Guardar
                </button>

            </div>
        </div>
        
        
    </>
  )
}
