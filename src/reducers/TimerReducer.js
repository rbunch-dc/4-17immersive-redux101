var TimerReducer = function(state = null, action){
	if(action.type == 'TIMER_TICK'){
		// console.log(action.payload)
		var localTime = action.payload.toLocaleTimeString();
		return localTime;
	}else{
		return state;
	}
}

export default TimerReducer