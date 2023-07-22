import './style.css'

export const Select = ({ TextName, styles="is-fullwidth", selres="selectrespons", name, onChange, value, selecStyle }) => {
  return (
    <div className={`select is-rounded big  ${ styles } ${ selres }`}>
        <select 
          className={`big ${selecStyle}`}
          name={name}
          onChange={onChange}
          value={value}
        > 
            <option>{ TextName }</option>
            <option>With options</option>
        </select>
    </div>
  )
}
