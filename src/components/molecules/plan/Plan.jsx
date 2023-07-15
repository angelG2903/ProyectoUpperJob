import { Button } from "../../atoms/button/Button"

export const Plan = ({ Title}) => {
    return (
        <>
            <div className="card2">
                <h4 className="subtitle is-5 tituloh4">{Title}</h4>
                
                <p className="texto">
                    Publicaciones de vacantes <br />
                    Búsquedas de CV <br />
                    Créditos para datos de contactos por mes <br />
                    Costo semestral primer usuario <br />
                    Costo anual primer usuario <br />
                    
                </p>
                <br />
                <Button TextName="$200.00 mnx"/>
            </div>
        </>
    )
}
