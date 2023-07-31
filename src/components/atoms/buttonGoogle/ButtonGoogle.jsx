import './style.css'

export const ButtonGoogle = ({ SrcImg, onClick }) => {
  return (
    <button 
      className="button is-rounded is-fullwidth google mt-3"
      onClick={onClick}
    >
      <img src={SrcImg} alt="" />
    </button>
  )
}