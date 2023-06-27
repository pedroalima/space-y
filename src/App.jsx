import Root from './components/Root';
import Home from './pages/home/Home'
import Destination from './pages/destination/Destination'
import Moon from './components/destination/Moon.jsx';
import Mars from './components/destination/Mars.jsx';
import Europa from './components/destination/Europa.jsx';
import Titan from './components/destination/Titan.jsx';
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'
import TechnologyPages from './components/TechnologyPages';

import data from './components/utilities/data';
import imageVehicleM from './images/technology/image-launch-vehicle-landscape.jpg'
import imageVehicleD from './images/technology/image-launch-vehicle-portrait.jpg'
import imageSpaceportM from './images/technology/image-spaceport-landscape.jpg'
import imageSpaceportD from './images/technology/image-spaceport-portrait.jpg'
import imageCapsuleM from './images/technology/image-space-capsule-landscape.jpg'
import imageCapsuleD from './images/technology/image-space-capsule-portrait.jpg'

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
        <Route path="/technology" element={ <Technology/> } >
            <Route path="/technology" element={ <TechnologyPages title={data.technology[0].name} description={data.technology[0].description} imageM={imageVehicleM} imageD={imageVehicleD} alt={"A rocket starting"} /> } />
            <Route path="1" element={ <TechnologyPages title={data.technology[0].name} description={data.technology[0].description} imageM={imageVehicleM} imageD={imageVehicleD} alt={"A rocket starting"} /> } />
            <Route path="2" element={ <TechnologyPages title={data.technology[1].name} description={data.technology[1].description} imageM={imageSpaceportM} imageD={imageSpaceportD} alt={"A spaceport"} /> } />
            <Route path="3" element={ <TechnologyPages title={data.technology[2].name} description={data.technology[2].description} imageM={imageCapsuleM} imageD={imageCapsuleD} alt={"A space capsule"} /> } />
        </Route>
    </Route>
));

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App