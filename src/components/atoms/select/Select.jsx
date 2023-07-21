import './style.css'

export const Select = ({ TextName, styles="is-fullwidth", name, onChange, value }) => {
  return (
    <div className={`select is-rounded big selectrespons ${ styles }`}>
        <select 
          className='big'
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
