import './style.css'

export const Input = ({ TextName }) => {
  return (
    <>
      <div className='mt-3'>
        <label>{ TextName }</label> 
        <input className="input is-rounded  big" type="text" />
      </div>
    </>
  )
}
