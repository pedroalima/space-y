import data from '../../components/utilities/data'

import './Crew.scss'

function Crew() {
    return (
        <section className='container-fluid' id='crew'>
            <div className='container pt-5 pt-md-0'>

                <div className='row min-vh-100 pt-5 py-md-0 text-center text-md-left align-items-md-end'>
                    <div className='col pt-2 pt-md-0'>
                        <h2 className="font-secondary-family text-uppercase font-primary-color title-custom"><span className='font-letter-space-1 title-custom opacity pr-2 pr-md-3'>02</span>Meet your crew</h2>
                        <div id="carouselCrew" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselCrew" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselCrew" data-slide-to="1"></li>
                                <li data-target="#carouselCrew" data-slide-to="2"></li>
                                <li data-target="#carouselCrew" data-slide-to="3"></li>
                            </ol>
                            <div className="carousel-inner">

                                <div className="carousel-item active py-5 py-md-0">
                                    <div className="row no-gutters justify-content-between align-items-center">
                                        <section className="col-12 col-md-5 py-3 py-md-0 order-md-2 image-custom crew-0">
                                        </section>
                                        <section className="col-12 col-md-6 py-4 py-md-0 order-md-1">
                                            <p className='font-primary-color opacity font-primary-family text-uppercase role-custom'>{data.crew[0].role}</p>
                                            <h3 className='font-primary-color font-primary-family text-uppercase name-custom'>{data.crew[0].name}</h3>
                                            <p className='font-secondary-color font-tertiary-family bio-custom'>{data.crew[0].bio}</p>
                                        </section>
                                    </div>
                                </div>
                                <div className="carousel-item py-5 py-md-0">
                                    <div className="row no-gutters justify-content-between align-items-center">
                                        <section className="col-12 col-md-5 py-3 py-md-0 order-md-2 image-custom crew-1">   
                                        </section>
                                        <section className="col-12 col-md-6 py-4 py-md-0 order-md-1">
                                            <p className='font-primary-color opacity font-primary-family text-uppercase role-custom'>{data.crew[1].role}</p>
                                            <h3 className='font-primary-color font-primary-family text-uppercase name-custom'>{data.crew[1].name}</h3>
                                            <p className='font-secondary-color font-tertiary-family bio-custom'>{data.crew[1].bio}</p>
                                        </section>
                                    </div>
                                </div>
                                <div className="carousel-item py-5 py-md-0">
                                    <div className="row no-gutters justify-content-between align-items-center">
                                        <section className="col-12 col-md-5 py-3 py-md-0 order-md-2 image-custom crew-2">
                                        </section>
                                        <section className="col-12 col-md-6 py-4 py-md-0 order-md-1">
                                            <p className='font-primary-color opacity font-primary-family text-uppercase role-custom'>{data.crew[2].role}</p>
                                            <h3 className='font-primary-color font-primary-family text-uppercase name-custom'>{data.crew[2].name}</h3>
                                            <p className='font-secondary-color font-tertiary-family bio-custom'>{data.crew[2].bio}</p>
                                        </section>
                                    </div>
                                </div>
                                <div className="carousel-item py-5 py-md-0">
                                    <div className="row no-gutters justify-content-between align-items-center">
                                        <section className="col-12 col-md-5 py-3 py-md-0 order-md-2 image-custom crew-3">
                                        </section>
                                        <section className="col-12 col-md-6 py-4 py-md-0 order-md-1">
                                            <p className='font-primary-color opacity font-primary-family text-uppercase role-custom'>{data.crew[3].role}</p>
                                            <h3 className='font-primary-color font-primary-family text-uppercase name-custom'>{data.crew[3].name}</h3>
                                            <p className='font-secondary-color font-tertiary-family bio-custom'>{data.crew[3].bio}</p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Crew