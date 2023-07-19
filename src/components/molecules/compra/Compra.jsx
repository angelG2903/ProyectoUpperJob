import { Button } from '../../atoms'
import './style.css'

export const Compra = ({Title}) => {
  return (
    <>
    
        <div className="card cStyles">
            <p className='t-card-compra'>{Title}</p>
            <p className='t-card-compra mb-2'>$200.00 mnx</p>
            
            <Button 
              style={"mb-2 btn-Trash"} 
              icon={<i className="fa-regular fa-trash-can"
              // onClick={""}
            ></i>}/>
        </div>


    </>
  )
}
