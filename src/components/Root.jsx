import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Root