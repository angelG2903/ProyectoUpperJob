import { Link } from 'react-router-dom'
import './style.css'

export const ButtonSmall = ({ TextName }) => {
  return (
    <Link className="button is-rounded isBlack" to="/informes">{ TextName }</Link>
  )
}
