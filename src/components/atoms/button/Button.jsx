import './style.css'

export const Button = ({ TextName, style, icon, onClick, type, isfull="is-fullwidth" }) => {
  return (
    <button 
      className={`button is-rounded ${isfull} isBlack ${ style }`}
      onClick={onClick}
      type={type}
    >
      { TextName }{icon}
    </button>
  )
}

