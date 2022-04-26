import './App.css';
import logo from './logo.svg';
import Header from './components/Header';
import Apod from './components/Apod';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Navbar />
				<div className="routes">
					<Routes>
						<Route path="/apod" element={<Apod />}></Route>
						<Route path="/space-images" element={<SpaceImages />}></Route>
						<Route path="/articles" element={<Articles />}></Route>
						<Route path="/weather-on-mars" element={<WeatherOnMars />}></Route>
						<Route path="/space-weather" element={<SpaceWeather />}></Route>
						<Route path="/exoplanets" element={<Exoplanets />}></Route>
						<Route
							path="/polychromatic-images-of-earth"
							element={<PolychromaticImages />}
						></Route>
						<Route path="/asteroids-near-earth" element={<Asteroids />}></Route>
					</Routes>
				</div>
			</main>
		</BrowserRouter>
	);
}

export default App;
