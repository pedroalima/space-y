// Routes
import Root from './components/Root';
import Home from './pages/home/Home'
import Destination from './pages/destination/Destination'
import DestinationPages from './components/DestinationPages.jsx';
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'
import TechnologyPages from './components/TechnologyPages';
// Data
import data from './components/utilities/data';
// Destination images
import imageMoon from './images/destination/image-moon.png'
import imageMars from './images/destination/image-mars.png'
import imageEuropa from './images/destination/image-europa.png'
import imageTitan from './images/destination/image-titan.png'
// Technology images
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
            <Route 
                path="/destination" 
                element={ <DestinationPages 
                    image={imageMoon} 
                    name={data.destinations[0].name} 
                    description={data.destinations[0].description} 
                    distance={data.destinations[0].distance} 
                    travel={data.destinations[0].travel} /> } />
            <Route 
                path="moon" 
                element={ <DestinationPages 
                    image={imageMoon} 
                    name={data.destinations[0].name} 
                    description={data.destinations[0].description} 
                    distance={data.destinations[0].distance} 
                    travel={data.destinations[0].travel} /> } />
            <Route 
                path="mars" 
                element={ <DestinationPages 
                    image={imageMars} 
                    name={data.destinations[1].name} 
                    description={data.destinations[1].description} 
                    distance={data.destinations[1].distance} 
                    travel={data.destinations[1].travel} /> } />
            <Route 
                path="europa" 
                element={ <DestinationPages 
                    image={imageEuropa} 
                    name={data.destinations[2].name} 
                    description={data.destinations[2].description} 
                    distance={data.destinations[2].distance} 
                    travel={data.destinations[2].travel} /> } />
            <Route 
                path="titan" 
                element={ <DestinationPages 
                    image={imageTitan} 
                    name={data.destinations[3].name} 
                    description={data.destinations[3].description} 
                    distance={data.destinations[3].distance} 
                    travel={data.destinations[3].travel} /> } />
        </Route>

        <Route path="/crew" element={ <Crew/> } />

        <Route path="/technology" element={ <Technology/> } >
            <Route 
                path="/technology" 
                element={ <TechnologyPages 
                    title={data.technology[0].name} 
                    description={data.technology[0].description} 
                    imageM={imageVehicleM} 
                    imageD={imageVehicleD} 
                    alt={"A rocket starting"} /> } />
            <Route 
                path="1" 
                element={ <TechnologyPages 
                    title={data.technology[0].name} 
                    description={data.technology[0].description} 
                    imageM={imageVehicleM} 
                    imageD={imageVehicleD} 
                    alt={"A rocket starting"} /> } />
            <Route 
                path="2" 
                element={ <TechnologyPages 
                    title={data.technology[1].name} 
                    description={data.technology[1].description} 
                    imageM={imageSpaceportM} 
                    imageD={imageSpaceportD} 
                    alt={"A spaceport"} /> } />
            <Route 
                path="3" 
                element={ <TechnologyPages 
                    title={data.technology[2].name} 
                    description={data.technology[2].description} 
                    imageM={imageCapsuleM} 
                    imageD={imageCapsuleD} 
                    alt={"A space capsule"} /> } />
        </Route>
    </Route>
));

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App