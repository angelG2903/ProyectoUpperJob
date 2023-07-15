import { useState } from "react";
import { Input } from "../../atoms/input/Input"
import { Select } from "../../atoms/select/Select"
import { Button } from "../../atoms/button/Button";
import { CheckBoxTerms } from "../../atoms/checkBoxT/CheckBoxTerms";
import './style.css'
import { TextArea } from "../../atoms/textArea/TextArea";
import { Compra } from "../compra/Compra";

export const StepperTarjeta = () => {

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
                <p className={`progress2 ${step > 0 ? 'progress-active2' : ''}`}>Datos de banco</p>
                <p className={`progress2 ${step >= 2 ? 'progress-active2' : ''}`}>Dirección</p>
                <p className={`progress2 ${step >= 3 ? 'progress-active2' : ''}`}>Personal info</p>
            </div>
            <form>
                {step === 1 && <h1><b>1.- Datos de banco</b></h1>}
                {step === 1 && <div className="step-content step-c22 margenTar">
                    <Input TextName={"Nombre de titular"} styles={"mt-3"}/>
                    <Input TextName={"Número de la tarjeta"} styles={"mt-3"}/>
                    <Input TextName={"Código de seguridad"} styles={"mt-3"}/>
                    <p className="mt-3">Fecha de vencimiento</p>
                    <div className="selects2">
                        <Select TextName={"Mes"} styles="medium-select"/>
                        <Select TextName={"Año"} styles="medium-select"/>
                    </div>
                    <Select TextName={"Seleccionar banco"} styles="mt-5 is-fullwidth"/>

                </div>}
                {step === 2 && <h1 className="mb-3"><b>2.- Dirección de facturación</b></h1>}
                {step === 2 && <div className="step-content step-c22 margenTar">

                    <Input TextName={"Código postal"}/>
                    <Select TextName={"Estado de la republica"} styles="mt-5 medium-select is-fullwidth"/>
                    <Select TextName={"Municipio"} styles="mt-5 medium-select is-fullwidth"/>
                    <TextArea TextName={"Dirección"} styles={"mt-5"}/>
                    <Input TextName={"Número de casa"} styles={"tamNuC mt-5"}/> 
                </div>}
                {step === 3 && <h1 className="mb-3"><b>3.- Compras</b></h1>}
                {step === 3 && <div className="step-content step-c33">

                    <Compra Title={"1 Plan basico"}/>
                    
                </div>}
            </form>
            
            <div className="btnopc">
                <button onClick={prevStep} disabled={step === 1} className="stepper-button button is-rounded isBlack">
                    Regresar
                </button>
                <button onClick={nextStep} disabled={step === 3} className={`stepper-button button is-rounded isBlack ${step === 3 ? 'd-none' : ''}`}>
                    Siguiente
                </button>
                <button disabled={step <= 2} className={`stepper-button button is-rounded isBlack ${step <= 2 ? 'd-none' : ''}`}>
                    Pagar
                </button>

            </div>
        </div>
        
        
    </>
  )
}
