import { Button } from "../../atoms/button/Button"
import './style.css';

export const Plan = ({ Title, Text}) => {
    return (
        <>
            <div className="card-2">
                <h4 className="title is-4 tituloh4">{Title}</h4>
                
                <p className="texto-2">
                    Publicaciones de vacantes <br />
                    Búsquedas de CV <br />
                    Créditos para datos de contactos por mes <br />
                    Costo semestral primer usuario <br />
                    Costo anual primer usuario <br />
                    
                </p>
                <br />
                <Button TextName={Text} style={'btn-plan'}/>
            </div>
        </>
    )
}
