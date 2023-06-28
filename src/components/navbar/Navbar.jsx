import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../images/shared/logo.svg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top m-3 my-md-4 ml-md-5 pr-md-0" id='navbar'>
        <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
        <div className="bar d-none d-md-block"></div>
        <button 
            className="navbar-toggler border-0 custom-toggle" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">
            <nav className="nav flex-column pl-2 py-5 flex-md-row justify-content-md-center py-md-0">
                <NavLink className="nav-link font-secondary-family font-primary-color font-letter-space text-uppercase font-weight-lighter px-md-0 py-md-4 mr-md-5" to="/"><span className='font-weight-bold'>00</span> Home<span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-link font-secondary-family font-primary-color font-letter-space text-uppercase font-weight-lighter px-md-0 py-md-4 mr-md-5" to="/destination"><span className='font-weight-bold'>01</span> Destination</NavLink>
                <NavLink className="nav-link font-secondary-family font-primary-color font-letter-space text-uppercase font-weight-lighter px-md-0 py-md-4 mr-md-5" to="/crew"><span className='font-weight-bold'>02</span> Crew</NavLink>
                <NavLink className="nav-link font-secondary-family font-primary-color font-letter-space text-uppercase font-weight-lighter px-md-0 py-md-4 mr-md-5" to="/technology"><span className='font-weight-bold'>03</span> Technology</NavLink>
            </nav>
        </div>
    </nav>
  )
}

export default Navbar