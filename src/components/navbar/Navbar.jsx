import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="##"><img src="" alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">00 Home<span className="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/destination">01 Destination</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/crew">02 Crew</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/technology">03 Technology</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar