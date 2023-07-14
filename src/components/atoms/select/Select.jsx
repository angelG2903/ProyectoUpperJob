import './style.css'

export const Select = ({ TextName }) => {
  return (
    <div className="select is-rounded is-fullwidth mt-3 big">
        <select className='big'> 
            <option>{ TextName }</option>
            <option>With options</option>
        </select>
    </div>
  )
}
