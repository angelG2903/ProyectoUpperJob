import './style.css'

export const Search = ({TextName, styles, type="text", name, value, onChange, inputSe}) => {
  return (
    <>
      <div className={`field mt-4 mb-4 ${styles}`}>
        <p className="control has-icons-right ">
          <input 
            className={`input is-rounded seatama ${inputSe}`} 
            type={type} 
            placeholder={TextName}
            name={name}
            value={value}
            onChange={onChange}
          />
          <span className="icon is-small is-right buscador ">
            <i className="fa-solid fa-magnifying-glass "></i>
          </span>
        </p>
      </div>
    </>
    
  )
}
