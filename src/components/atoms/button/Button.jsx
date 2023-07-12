import './style.css'

export const Button = ({ TextName, style }) => {
  return (
    <button className={`button is-rounded is-fullwidth isBlack ${ style }`}>{ TextName }</button>
  )
}
