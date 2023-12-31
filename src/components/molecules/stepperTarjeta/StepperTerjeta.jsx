import { useState } from "react";
import { Input, Select, TextArea } from "../../atoms"
import { Compra } from "../compra/Compra";
import './style.css'

export const StepperTarjeta = ({ onSubmit }) => {

    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    const mes = [
        { label: 'Enero', value: 'Enero'},
        { label: 'Febrero', value: 'Febrero'},
        { label: 'Marzo', value: 'Marzo'},
        { label: 'Abril', value: 'Abril'},
        { label: 'Mayo', value: 'Mayo'},
    ]

    const ages = [
        { label: '23', value: '23'},
        { label: '24', value: '24'},
        { label: '25', value: '25'},
        { label: '26', value: '26'},
        { label: '27', value: '27'},
        { label: '29', value: '29'},
        { label: '30', value: '30'},
    ]

    const banco = [
        { label: 'HSVC', value: 'HSVC'},
        { label: 'Banco Azteca', value: 'Banco Azteca'},
    ]
    const estadoR = [
        { label: 'Mexico', value: 'Mexico'},
        { label: 'Puebla', value: 'Puebla'},
    ]
    const municipio = [
        { label: 'Tochtepec', value: 'Tochtepec'},
        { label: 'San Martin', value: 'San Martin'},
    ]

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
            <form onSubmit={onSubmit}>
                {step === 1 && <h1><b>1.- Datos de banco</b></h1>}
                {step === 1 && <div className="step-content step-c22 margenTar">
                    <Input 
                        TextName={"Nombre de titular"} 
                        styles={"mt-3"}
                        name={"nombreTitular"}
                        /* value={""}
                        onChange={""} */
                        type={"text"}
                    />

                    <Input 
                        TextName={"Número de la tarjeta"} 
                        styles={"mt-3"}
                        name={"numeroTarjeta"}
                        /* value={""}
                        onChange={""} */
                        type={"text"}
                    />

                    <Input 
                        TextName={"Código de seguridad"} 
                        styles={"mt-3"}
                        name={"codigoSeguridad"}
                        /* value={""}
                        onChange={""} */
                        type={"password"}
                    />

                    <p className="mt-3">Fecha de vencimiento</p>
                    <div className="selects2">
                        <Select TextName={"Mes"} styles="" selecStyle={"seleChiqu"} selres="" optio={mes}/>
                        <Select TextName={"Año"} styles="" selecStyle={"seleChiqu"} selres="" optio={ages}/>
                    </div>
                    <Select TextName={"Seleccionar banco"} styles="mt-5 is-fullwidth" optio={banco}/>

                </div>}
                {step === 2 && <h1 className="mb-3"><b>2.- Dirección de facturación</b></h1>}
                {step === 2 && <div className="step-content step-c22 margenTar">

                    <Input 
                        TextName={"Código postal"}
                        name={"codigoPostal"}
                        /* value={""}
                        onChange={""} */
                        type={"number"}
                    />
                    <Select TextName={"Estado de la republica"} styles="mt-5 medium-select is-fullwidth" optio={estadoR}/>
                    <Select TextName={"Municipio"} styles="mt-5 medium-select is-fullwidth" optio={municipio}/>
                    <TextArea 
                        TextName={"Dirección"} 
                        styles={"mt-5"}
                        styleText={"text-tarjeta"}
                        name={"direccion"}
                        /* value={""}
                        onChange={""} */
                        type={"text"}
                    />
                    <Input 
                        TextName={"Número de casa"} 
                        styles={"tamNuC mt-5"}
                        name={"numeroCasa"}
                        /* value={""}
                        onChange={""} */
                        type={"number"}
                    /> 
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
                <button disabled={step <= 2} type="submit" className={`stepper-button button is-rounded isBlack ${step <= 2 ? 'd-none' : ''}`}>
                    Pagar
                </button>

            </div>
        </div>
        
        
    </>
  )
}
