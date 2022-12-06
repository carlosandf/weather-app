import React, { memo } from 'react';
import './styles.css';

const CurrentWeather = () => {
	return (
		<section className='CurrentWeather'>
			<div className="CurrentWeather--details">
				<h2>Temo</h2>
				<span>0°</span>
				<ul className="CurrentWeather--stats">
					<li>
						<span>Wind</span>
						<span>5 km/h</span>
					</li>
					<li>
						<span>Humidity</span>
						<span>23%</span>
					</li>
				</ul>
				<div className="CurrentWeather--actual">
					<h3>Raining</h3>
				</div>
			</div>
			<div className="CurrentWeather--img">
				<img src="" alt="Weather" />
			</div>
		</section>
	);
};

export default memo(CurrentWeather);