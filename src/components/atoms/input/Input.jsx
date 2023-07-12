import './style.css'

export const Input = ({ TextName }) => {
  return (
    <>
      <label >{ TextName }</label> 
      <input className="input is-rounded mb-3 big" type="text" />
    </>
  )
}
