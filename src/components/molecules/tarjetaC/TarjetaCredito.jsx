import card from '../../../assets/card.png'
import './style.css'

export const TarjetaCredito = ({ style }) => {
  return (
    <div className={`credit-card-wrapper ${style}`}>
        <div className="credit-card">
            <h3 className="titlee">credit card</h3>
            <span className="bank-name">national bank</span>
            <img className='chip' src={card} alt="" />
            <h3 className='card-number'>5422 4512 1412 6455</h3>
            <div className='name-valid'>
                <h3 className='holder-name'>Pedro Adan C</h3>
                <div className='validity'>
                    <span>valid <br />thru</span>
                    <span>11/28</span>
                </div>
            </div>
        </div>
    </div>
  )
}
