import './style.css'

export const Select = ({ TextName, styles="is-fullwidth" }) => {
  return (
    <div className={`select is-rounded big ${ styles }`}>
        <select className='big'> 
            <option>{ TextName }</option>
            <option>With options</option>
        </select>
    </div>
  )
}
