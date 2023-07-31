import './style.css'

export const ButtonPeque = ({TextName, onClick}) => {
  return (
    <>
        <div className="btn-targ">
            <button 
              className="button is-rounded btn-1"
              onClick={onClick}
            >
              {TextName}
            </button>
        </div>

    </>
  )
}
