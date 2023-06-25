// import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

// import data from '../../components/utilities/data'
// import imageMoon from '../../images/destination/image-moon.png'

import './Destination.scss'

function Destination() {
    return (
        <section className='container-fluid' id='destination'>
            <div className='container pt-5 pt-md-0'>

                <div className='row min-vh-100 pt-5 py-md-5 text-center text-md-left align-items-md-end'>
                    <div className='col pt-2 pt-md-0'>
                        <h2 className="pb-md-5 pl-md-4 font-secondary-family text-uppercase font-primary-color title-custom"><span className='font-letter-space-1 title-custom opacity pr-md-3'>01</span> Pick your destination</h2>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destination