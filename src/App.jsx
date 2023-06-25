import Root from './components/Root';
import Home from './pages/home/Home'
import Destination from './pages/destination/Destination'
import Moon from './components/destination/Moon.jsx';
import Mars from './components/destination/Mars.jsx';
import Europa from './components/destination/Europa.jsx';
import Titan from './components/destination/Titan.jsx';
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
        <Route path="/" element={ <Home/> } />
        <Route path="/destination" element={ <Destination/> }>
            <Route path="/destination" element={ <Moon/> } />
            <Route path="moon" element={ <Moon/> } />
            <Route path="mars" element={ <Mars/> } />
            <Route path="europa" element={ <Europa/> } />
            <Route path="titan" element={ <Titan/> } />
        </Route>
        <Route path="/crew" element={ <Crew/> } />
        <Route path="/technology" element={ <Technology/> } />
    </Route>
));

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App