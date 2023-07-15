import './style.css'

export const ButtonPequeño = ({TextName}) => {
  return (
    <>
        <div className="btn-targ">
            <button className="button is-rounded btn-1">{TextName}</button>
        </div>

    </>
  )
}
