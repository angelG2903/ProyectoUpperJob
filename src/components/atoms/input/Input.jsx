import './style.css'

export const Input = ({ TextName, styles, name, value, onChange, type, inputRes="inputrespons" }) => {
  return (
    <>
      <div className={`${styles}`}>
        <h1>{ TextName }</h1> 
        <input 
          className={`input is-rounded big ${inputRes}`} 
          type={type} 
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}
