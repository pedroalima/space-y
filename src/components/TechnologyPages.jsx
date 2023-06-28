import Jumbotron from './Jumbotron'

import { NavLink } from 'react-router-dom'

function TechnologyPages({ title, description, imageD, imageM, alt }) {
  return (
    <>
        <div className="col-12 col-md-1 order-2 order-md-1">
            <ul className="nav justify-content-center flex-md-column text-center">
                <li className='nav-link'>
                    <NavLink to="/technology/1" className="nav-link font-primary-family link-custom rounded-circle py-md-2 px-md-4">1</NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to="/technology/2" className="nav-link font-primary-family link-custom rounded-circle py-md-2 px-md-4">2</NavLink>
                </li>
                <li className='nav-link'>
                    <NavLink to="/technology/3" className="nav-link font-primary-family link-custom rounded-circle py-md-2 px-md-4">3</NavLink>
                </li>
            </ul>
        </div>
        <div className="col-12 col-md-6 order-3 order-md-2">
            <Jumbotron
                subtitle={"The terminology..."} 
                title={title} 
                description={description}  
            />
        </div>
        <div className='col-12 px-0 py-4 col-md-5 py-md-0 order-1 order-md-3'>
            <picture className='banner-image'>
                <source media="(min-width: 768px)" srcSet={imageD} />
                <img className='image-custom' src={imageM} alt={alt} />
            </picture>
        </div>
    </>

  )
}

export default TechnologyPages