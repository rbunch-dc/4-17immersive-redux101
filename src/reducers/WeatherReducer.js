export default function(state = [],action){
	console.log("Weather Reducer is running...")
	switch(action.type){
		case "GET_WEATHER":
			//Code will run if action.type = "GET_WEATHER"
			console.log("ACTION IN ACTION!!")
			return action.payload
		case "DoTheHokeyPokey":
			return state;
		default:
			return state;
	}
}