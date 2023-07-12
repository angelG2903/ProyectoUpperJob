import './style.css'

export const Search = () => {
  return (
    <>
      <div className="field mt-4 mb-0">
        <p className="control has-icons-right">
          <input className="input is-rounded" type="text" placeholder="Search"/>
          <span className="icon is-small is-right buscador">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </p>
      </div>
    </>
    
  )
}