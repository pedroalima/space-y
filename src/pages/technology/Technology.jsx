import { Outlet } from 'react-router-dom'

import './Technology.scss'

function Technology() {
    return (
        <section className='container-fluid px-0' id='technology'>
            <div className='container pt-5 pt-md-0'>

                <div className='row min-vh-100 pt-5 py-md-5 text-center text-md-left align-items-md-end'>
                    <div className='col pt-2 pt-md-0'>
                        <h2 className="pb-md-3 font-secondary-family text-uppercase font-primary-color title-custom"><span className='font-letter-space-1 title-custom opacity pr-2 pr-md-3'>03</span>Space launch 101</h2>
                        
                        <div className='row align-items-md-center'>
                           <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technology