import ibm from '../../assets/ibm.svg'

export const Card = () => {
  return (
    <div className="card">
        <div className="card-image">
            <figure className="image ">
            <img src={ibm} alt=""/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
            <div className="media-left">
                <figure className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></img>
                </figure>
            </div>
            <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6">@johnsmith</p>
            </div>
            </div>

            <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            
            </div>
        </div>
    </div>
  )
}
