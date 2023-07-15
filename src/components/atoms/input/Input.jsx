import './style.css'

export const Input = ({ TextName, styles }) => {
  return (
    <>
      <div className={`${styles}`}>
        <label>{ TextName }</label> 
        <input className="input is-rounded big" type="text" />
      </div>
    </>
  )
}
