import './style.css';

export const ImagenRedonda = ({Image, TextName, style, img2="img-2"}) => {
  return (
    <>  
        <figure className="imag-f">
            <img className={`is-rounded ${img2} ${style}`} src={Image}/>
            <h2>{TextName}</h2>
        </figure>
    </>
  )
}
