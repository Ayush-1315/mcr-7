import './App.css';
import {Route,Routes} from "react-router-dom"
import { Home } from './pages/home/home';
import { Countries } from './pages/country/countryPage';
import { TouristPlaces } from './pages/touristPlaces/touristPlaces';
import { PlacePage } from './pages/place/place';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/countries/:continentId" element={<Countries/>}/>
        <Route path="/places/:continentId/:countryId" element={<TouristPlaces/>}/>
        <Route path="/place/:continent/:country/:placeId" element={<PlacePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
