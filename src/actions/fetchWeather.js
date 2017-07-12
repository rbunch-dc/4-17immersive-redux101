import $ from 'jquery';

// fetchWeather is an async operation. 
// The dispatcher WILL NOT wait.
// This is why everyone seems to bad mouth JavaScript.
// Luckily... redux middleware can rescue us.
// Redux middleware, redux-promise, has to be added 
// when the store is created.

var fetchWeather = function(){
	console.log("Fetch weather action in progress...")
	const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30324&appid=e312dbeb8840e51f92334498a261ca1d'
	// jQuery AJAX always returns a promise. We no longer want to
	// send our callback. redux-promise will handle it for us
	const thePromise = $.getJSON(weatherUrl);
	console.log(thePromise)
	// $.getJSON(weatherUrl, (weatherData)=>{
		// console.log(weatherData)
	return {
		type: 'GET_WEATHER',
		//we can return "thePromise" because redux-promise is 
		// going to make sure it's ready BEFORE it's dispatched to the reducers
		payload: thePromise
	}
	// })	
}

export default fetchWeather;