import { NavLink } from 'react-router-dom'

function DestinationPages({ image, name, description, distance, travel}) {
  return (
    <div className='row justify-content-md-around'>
        <div className='col-12 col-md-5 text-center pt-4'>
            <figure className="figure">
                <img src={image} className="figure-img img-fluid rounded image-custom" alt="The moon" />
            </figure>
        </div>
        <div className='col-12 col-md-5'>
            <section className="jumbotron bg-transparent py-0 px-0 py-md-0 my-md-0">
                <nav className="nav justify-content-center justify-content-md-start py-3">
                    <NavLink to="/destination/moon" className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase px-md-0 mr-md-4">Moon<span className="sr-only">(current)</span></NavLink>
                    <NavLink to="/destination/mars" className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase px-md-0 mr-md-4">Mars</NavLink>
                    <NavLink to="/destination/europa" className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase px-md-0 mr-md-4">Europa</NavLink>
                    <NavLink to="/destination/titan" className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase px-md-0 mr-md-4">Titan</NavLink>
                </nav>
                <h3 className="display-4 pt-3 font-primary-family text-uppercase font-primary-color font-letter-space">{name}</h3>
                <p className='font-secondary-color font-tertiary-family pb-4 pb-md-5 border-bottom border-secondary h-custom'>{description}</p>
                <ul className='list-group flex-md-row justify-content-start'>
                    <li className='list-group-item bg-transparent pl-md-0 border-0'>
                        <h6 className='font-secondary-family font-secondary-color font-letter-space text-uppercase'>Avg. distance</h6>
                        <h4 className='font-primary-family font-primary-color font-letter-space text-uppercase'>{distance}</h4>
                    </li>
                    <li className='list-group-item bg-transparent border-0'>
                        <h6 className='font-secondary-family font-secondary-color font-letter-space text-uppercase'>Est. travel time</h6>
                        <h4 className='font-primary-family font-primary-color font-letter-space text-uppercase'>{travel}</h4>
                    </li>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default DestinationPages