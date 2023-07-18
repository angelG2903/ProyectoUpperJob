import { Button } from '../../atoms/button/Button';
import { Tag } from '../../atoms/tag/Tag';
import './style.css';

export const CardPostulanteEmpleado = ({Image, TextName, Text}) => {
  return (
    <>
        <div className="card car-one">
            <figure className="image is-128x128 img-roun">
                <img className="is-rounded" src={Image} alt="" />
            </figure>
            <div className="card2-cont">
                <h2>{TextName}</h2>
                <p>{Text}</p>
                <Button TextName='Ver detalles' style='card-btn'/>
            </div>

            <Tag TextName='En proceso..' style='card-tag'/>
        </div>
    </>
  )
}
