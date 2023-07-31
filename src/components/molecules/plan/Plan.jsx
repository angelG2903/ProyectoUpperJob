import { Button } from "../../atoms"
import './style.css';

export const Plan = ({ Title, Text}) => {
    return (
        <>
            <div className="card-2">
                <h4 className="tituloh4">{Title}</h4>
                
                <p className="texto-2">
                    Publicaciones de vacantes 
                    Búsquedas de CV 
                    Créditos para datos de contactos por mes <br />
                    Costo semestral primer usuario <br />
                    Costo anual primer usuario <br />
                    
                </p>
                <br />
                <Button 
                    TextName={Text} 
                    isfull=""
                    style={'btn-plan'}
                    // onClick={""}
                />
            </div>
        </>
    )
}
