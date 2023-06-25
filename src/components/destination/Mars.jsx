import React from 'react'
import { NavLink } from 'react-router-dom'

import data from '../utilities/data'
import imageMars from '../../images/destination/image-mars.png'

function Mars() {
  return (
    <div className='row justify-content-md-around'>
        <div className='col-12 col-md-5 text-center pt-4'>
            <figure className="figure">
                <img src={imageMars} className="figure-img img-fluid rounded image-custom" alt="The mars" />
            </figure>
        </div>
        <div className='col-12 col-md-5'>
            <section className="jumbotron bg-transparent py-0 px-0 py-md-0 my-md-0">
                <ul className="nav justify-content-center justify-content-md-start">
                    <li className="nav-item">
                        <NavLink to="/destination/moon" className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase pl-md-0 pr-md-4">Moon</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/destination/mars" className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase pl-md-0 pr-md-4">Mars</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/destination/europa" className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase pl-md-0 pr-md-4">Europa</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/destination/titan" className="nav-link link-custom font-secondary-family font-secondary-color font-letter-space text-uppercase pl-md-0 pr-md-4">Titan</NavLink>
                    </li>
                </ul>
                <h3 className="display-4 pt-3 font-primary-family text-uppercase font-primary-color font-letter-space">{data.destinations[1].name}</h3>
                <p className='font-secondary-color font-tertiary-family pb-4 pb-md-5 border-bottom border-secondary'>{data.destinations[1].description}</p>
                <ul className='list-group flex-md-row justify-content-start'>
                    <li className='list-group-item bg-transparent pl-md-0 border-0'>
                        <h6 className='font-secondary-family font-secondary-color font-letter-space text-uppercase'>Avg. distance</h6>
                        <h4 className='font-primary-family font-primary-color font-letter-space text-uppercase'>{data.destinations[1].distance}</h4>
                    </li>
                    <li className='list-group-item bg-transparent border-0'>
                        <h6 className='font-secondary-family font-secondary-color font-letter-space text-uppercase'>Est. travel time</h6>
                        <h4 className='font-primary-family font-primary-color font-letter-space text-uppercase'>{data.destinations[1].travel}</h4>
                    </li>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default Mars