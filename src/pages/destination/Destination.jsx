import { NavLink } from 'react-router-dom'

import data from '../../components/utilities/data'
import imageMoon from '../../images/destination/image-moon.png'

import './Destination.scss'

function Destination() {
    return (
        <section className='container-fluid' id='destination'>
            <div className='container pt-5 pt-md-0'>

                <div className='row min-vh-100 pt-5 py-md-5 text-center text-md-left align-items-md-end'>
                    <div className='col pt-2 pt-md-0'>
                        <h2 className="pb-md-5 pl-md-4 font-secondary-family text-uppercase font-primary-color title-custom"><span className='font-letter-space-1 title-custom opacity pr-md-3'>01</span> Pick your destination</h2>
                        
                        <div className='row justify-content-md-around'>
                            <div className='col-12 col-md-5 text-center pt-4'>
                                <figure className="figure">
                                    <img src={imageMoon} className="figure-img img-fluid rounded image-custom" alt="The moon" />
                                </figure>
                            </div>
                            <div className='col-12 col-md-5'>
                                <section className="jumbotron bg-transparent py-0 px-0 py-md-0 my-md-0">
                                    <ul className="nav justify-content-center justify-content-md-start">
                                        <li className="nav-item">
                                            <NavLink className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase pl-md-0 pr-md-4" to="/destination">Moon</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase pl-md-0 pr-md-4" to="/destination">Mars</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase pl-md-0 pr-md-4" to="/destination">Europa</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase pl-md-0 pr-md-4" to="/destination">Titan</NavLink>
                                        </li>
                                    </ul>
                                    <h3 className="display-4 pt-3 font-primary-family text-uppercase font-primary-color font-letter-space">{data.destinations[0].name}</h3>
                                    <p className='font-secondary-color font-tertiary-family pb-4 pb-md-5 border-bottom border-secondary'>{data.destinations[0].description}</p>
                                    <ul className='list-group flex-md-row justify-content-start'>
                                        <li className='list-group-item bg-transparent pl-md-0 border-0'>
                                            <h6 className='font-secondary-family font-secondary-color font-letter-space text-uppercase'>Avg. distance</h6>
                                            <h4 className='font-primary-family font-primary-color font-letter-space text-uppercase'>{data.destinations[0].distance}</h4>
                                        </li>
                                        <li className='list-group-item bg-transparent border-0'>
                                            <h6 className='font-secondary-family font-secondary-color font-letter-space text-uppercase'>Est. travel time</h6>
                                            <h4 className='font-primary-family font-primary-color font-letter-space text-uppercase'>{data.destinations[0].travel}</h4>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destination