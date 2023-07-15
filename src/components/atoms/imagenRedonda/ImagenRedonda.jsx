import './style.css';

export const ImagenRedonda = ({Image, TextName, style}) => {
  return (
    <>  
        <figure className="imag-f">
            <img className={`is-rounded img-2 ${style}`} src={Image}/>
            <h2>{TextName}</h2>
        </figure>
    </>
  )
}
