const getUserLocation = async () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(userLocation) => {
				resolve(userLocation);
			},
			(error) => {
				alert('No se pudo obtener la ubicación');
				console.error(error);
				reject(error);
			}
		);
	});
};

export default getUserLocation;