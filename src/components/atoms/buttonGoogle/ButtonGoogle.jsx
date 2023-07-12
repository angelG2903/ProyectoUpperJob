import './style.css'

export const ButtonGoogle = ({ SrcImg }) => {
  return (
    <button className="button is-rounded is-fullwidth google mt-3"><img src={SrcImg} alt="" /></button>
  )
}