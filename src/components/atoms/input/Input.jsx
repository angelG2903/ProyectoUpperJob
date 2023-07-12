export const Input = () => {
  return (
    <>
      <form className='form'>
        <label>Nombre</label> 
        <input className="input is-rounded" type="text" />

        <label>Apellido</label> 
        <input className="input is-rounded" type="text" />

        <label>E-mail</label> 
        <input className="input is-rounded" type="email" />
      </form>
    </>
  )
}
