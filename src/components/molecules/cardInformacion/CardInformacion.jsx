import './style.css'

export const CardInformacion = ({TextName, Title}) => {
  return (
    <>
      <div className="card card-info">
          <div className="card-header-title card-title1">
              <p>{Title}</p>
          </div>

          <div className="card-content card-con2">
              <p>{TextName}</p>
          </div>
      </div>
    </>
  )
}
