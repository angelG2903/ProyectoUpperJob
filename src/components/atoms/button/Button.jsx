import './style.css'

export const Button = ({ TextName, style, icon, onClick, type }) => {
  return (
    <button 
      className={`button is-rounded is-fullwidth isBlack ${ style }`}
      onClick={onClick}
      type={type}
    >
      { TextName }{icon}
    </button>
  )
}

