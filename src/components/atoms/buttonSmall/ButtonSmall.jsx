import { Link } from 'react-router-dom'
import './style.css'

export const ButtonSmall = ({ TextName, onTo, style }) => {
  return (
    <Link 
      className={`button is-rounded isBlack ${style}`} 
      to={onTo}
    >
      { TextName }
    </Link>
  )
}
