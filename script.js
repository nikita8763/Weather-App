// API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ba401fd93mshc5bed3a6b73fd20p17146bjsnec9d948278a5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
	.then(response => response.json())
	.then((response) => {
		
	console.log(response);

	cloud_pct.innerHTML = response.cloud_pct
	temp.innerHTML = response.temp 
	feels_like.innerHTML = response.feels_like 
	humidity.innerHTML = response.humidity 
	min_temp.innerHTML = response.min_temp 
	max_temp.innerHTML = response.max_temp 
	Wind_speed.innerHTML = response.wind_speed 
	Wind_degrees.innerHTML = response.wind_degrees 
	sunrise.innerHTML = response.sunrise 
	sunset.innerHTML = response.sunset
	})
	.catch (err => console.error(err));