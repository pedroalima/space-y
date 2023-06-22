import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home/Home'
import Destination from './pages/destination/Destination'
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'

function App() {
    return (
        <Router>
            <header className='container'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="##">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">menu</span>
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
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/destination' element={<Destination />} />
                    <Route path='/crew' element={<Crew />} />
                    <Route path='/technology' element={<Technology />} />
                </Routes>
            </header>
        </Router>
    )
}

export default App