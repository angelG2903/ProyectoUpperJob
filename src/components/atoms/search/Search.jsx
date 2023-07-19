import './style.css'

export const Search = ({TextName, type="text", name, value, onChange}) => {
  return (
    <>
      <div className="field mt-4 mb-4">
        <p className="control has-icons-right ">
          <input 
            className="input is-rounded seatama" 
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
