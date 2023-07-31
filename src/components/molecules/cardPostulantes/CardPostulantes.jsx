

export const CardPostulantes = ({TextName, onClickE, onClickD}) => {
    return (
        <>
            <div className="ca">
                <div className="ti3">
                    <i className="fa-solid fa-display fa-2xl computer"></i>
                    <h3>{TextName}</h3>
                </div>

                <div className="par">
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    </p>
                </div>
                
                <hr />

                <div className="buttonsFinal">
                    <button 
                        className="button is-primary is-outlined is-rounded btnF"
                        onClick={onClickE}
                    >Editar</button>
                    <button 
                        className="button is-primary is-outlined is-rounded btnF2"
                        onClick={onClickD}
                    >Eliminar</button>
                </div>

            </div>
        </>
    )
}
