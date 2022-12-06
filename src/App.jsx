import React, { memo, useEffect, useState } from 'react';
import CurrentWeather from './components/CurrentWeather';
import getUserLocation from './helpers/getUserLocation';
import '@styles/App.css';

const getUrl = (data = {}) => {
	const baseUrl = 'https://api.openweathermap.org/data';

	return `${baseUrl}/2.5/weather?lang=es&lat=${data.latitude}&lon=${data.longitude}&appid=${import.meta.env.VITE_API_KEY}&units=metrics`;
};


function App() {
	const [userCoords, setUserCoords] = useState({});

	useEffect(() => {
		getUserLocation()
			.then(({coords}) => {
				setUserCoords(coords);
				fetch(getUrl(coords))
					.then(resp => resp.json())
					.then(data => console.log(data));
			});
	}, []);

	return (
		<div className="App">
			<div>latitud: {userCoords.latitude}</div>
			<div>longitud: {userCoords.longitude}</div>
			<CurrentWeather />
		</div>
	);
}

export default memo(App);
