import './style.css'

export const Button = ({ TextName }) => {
  return (
    <button className="button is-rounded is-fullwidth isBlack mt-3">{ TextName }</button>
  )
}
