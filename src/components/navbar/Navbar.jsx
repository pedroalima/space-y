import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/shared/logo.svg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light my-md-4 ml-md-5 pr-md-0" id='navbar'>
        <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon custom-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">
            <ul className="nav p-md-3 px-md-5">
                <li className="nav-item active">
                    <Link className="nav-link font-primary-color font-secondary-family text-uppercase px-md-4" to="/">00 Home<span className="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link font-primary-color font-secondary-family text-uppercase px-md-4" to="/destination">01 Destination</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link font-primary-color font-secondary-family text-uppercase px-md-4" to="/crew">02 Crew</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link font-primary-color font-secondary-family text-uppercase px-md-4" to="/technology">03 Technology</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar