import './style.css'

export const Select = ({ optio, TextName, styles="is-fullwidth", selres="selectrespons", name, onChange, value, selecStyle }) => {

  // optio = JSON.parse(optio)

  return (
    <div className={`select is-rounded big  ${ styles } ${ selres }`}>
        <select 
          className={`big ${selecStyle}`}
          name={name}
          onChange={onChange}
          value={value}
        >
          <option>{ TextName }</option>
          
          {optio.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          
            
            
        </select>
    </div>
  )
}
