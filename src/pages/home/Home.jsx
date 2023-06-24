import './Home.scss'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='container-fluid' id='home'>
            <div className='container'>
                <div className='row min-vh-100 d-flex justify-content-center py-5 py-md-5 px-md-5 align-items-center justify-content-md-between align-items-md-end'>
                    <div className='col-12 col-md-4 text-center text-md-left'>
                        <div className="jumbotron bg-transparent pt-5 pb-0 px-0 mt-5 mb-0 pb-md-5">
                            <p className="font-secondary-family text-uppercase font-secondary-color font-weight-lighter font-letter-space subtitle-custom">So, you want to travel to</p>
                            <h1 className="display-3 py-md-2 font-primary-family text-uppercase font-primary-color font-letter-space title-custom">Space</h1>
                            <p className='font-secondary-color font-tertiary-family'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3 py-5 text-center'>
                        <Link to="/destination">
                            <div className='border-custom py-5'>
                                <button className='btn rounded-circle bg-white font-primary-family text-uppercase font-tertiary-color font-letter-space btn-custom'>Explore</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home