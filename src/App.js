import './App.css';

//=============================== PAGES ==============================//
import SpaceImages from './pages/SpaceImages';
import Articles from './pages/Articles';
import Asteroids from './pages/Asteroids';
import Exoplanets from './pages/Exoplanets';
import PolychromaticImages from './pages/PolychromaticImages';
import SpaceWeather from './pages/SpaceWeather';
import WeatherOnMars from './pages/WeatherOnMars';

//============================  COMPONENTS =========================//
import logo from './logo.svg';
import Header from './components/Header';
import Apod from './components/Apod';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<main>
					<Navbar />
					<div className="routes">
						<Routes>
							<Route path="/apod" element={<Apod />}></Route>
							<Route path="/space-images" element={<SpaceImages />}></Route>
							<Route path="/articles" element={<Articles />}></Route>
							<Route
								path="/weather-on-mars"
								element={<WeatherOnMars />}
							></Route>
							<Route path="/space-weather" element={<SpaceWeather />}></Route>
							<Route path="/exoplanets" element={<Exoplanets />}></Route>
							<Route
								path="/polychromatic-images-of-earth"
								element={<PolychromaticImages />}
							></Route>
							<Route
								path="/asteroids-near-earth"
								element={<Asteroids />}
							></Route>
						</Routes>
					</div>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
