import './App.scss';

//=============================== PAGES ==============================//
import SpaceImages from './pages/SpaceImages';
import Articles from './pages/Articles';
import Asteroids from './pages/Asteroids';
import Exoplanets from './pages/Exoplanets';
import PolychromaticImages from './pages/PolychromaticImages';
import SpaceWeather from './pages/SpaceWeather';
import WeatherOnMars from './pages/WeatherOnMars';

//============================ COMPONENTS =========================//
import Header from './components/Header/Header';
import Apod from './components/Apod/Apod';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MenuModal from './components/MenuModal/MenuModal';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Apod />}></Route>
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
					<LoadingScreen text="Loading" />
				</main>

				<Footer />
			</div>
			<MenuModal />
		</BrowserRouter>
	);
}

export default App;
