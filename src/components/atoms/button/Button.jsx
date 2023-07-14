import './style.css'

export const Button = ({ TextName, style, icon }) => {
  return (
    <button className={`button is-rounded is-fullwidth isBlack ${ style }`}>{ TextName }{icon}</button>
  )
}
