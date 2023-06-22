import Navbar from './components/navbar/Navbar'

import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className='App'>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default App