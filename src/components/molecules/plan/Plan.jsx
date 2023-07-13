import { Button } from "../../atoms/button/Button"

export const Plan = ({ Title, Text}) => {
    return (
        <>
            <div className="card">
                    <h4 className="subtitle is-5">{Title}</h4>
                    
                    <p className="text">
                        Publicaciones de vacantes <br />
                        Búsquedas de CV <br />
                        Créditos para datos de contactos por mes <br />
                        Costo semestral primer usuario <br />
                        Costo anual primer usuario <br />
                    </p>
                    <Button TextName="$200.00 mnx"/>
                </div>
        </>
    )
}
