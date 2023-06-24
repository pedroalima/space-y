import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/shared/logo.svg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top m-3 my-md-4 ml-md-5 pr-md-0" id='navbar'>
        <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
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
            <ul className="nav flex-column pl-2 py-5 flex-md-row p-md-3 px-md-5">
                <li className="nav-item">
                    <Link className="nav-link active font-secondary-family font-primary-color font-letter-space text-uppercase font-weight-lighter px-md-4" to="/"><span className='font-weight-bold'>00</span> Home<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link font-secondary-family font-primary-color font-letter-space text-uppercase font-weight-lighter px-md-4" to="/destination"><span className='font-weight-bold'>01</span> Destination</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link font-secondary-family font-primary-color font-letter-space text-uppercase font-weight-lighter px-md-4" to="/crew"><span className='font-weight-bold'>02</span> Crew</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link font-secondary-family font-primary-color font-letter-space text-uppercase font-weight-lighter px-md-4" to="/technology"><span className='font-weight-bold'>03</span> Technology</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar