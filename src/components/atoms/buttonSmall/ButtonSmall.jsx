import { Link } from 'react-router-dom'
import './style.css'

export const ButtonSmall = ({ TextName, onTo }) => {
  return (
    <Link 
      className="button is-rounded isBlack" 
      to={onTo}
    >
      { TextName }
    </Link>
  )
}
