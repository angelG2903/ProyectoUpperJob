import './style.css'

export const Input = ({ TextName, styles, name, value, onChange, type }) => {
  return (
    <>
      <div className={`${styles}`}>
        <label>{ TextName }</label> 
        <input 
          className="input is-rounded big" 
          type={type} 
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}
