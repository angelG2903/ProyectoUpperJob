
export const Select = ({ TextName }) => {
  return (
    <div className="select is-fullwidth mt-3">
        <select>
            <option>{ TextName }</option>
            <option>With options</option>
        </select>
    </div>
  )
}
