import React, { Component } from 'react';
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/fetchWeather'
import { connect } from 'react-redux';

class WeatherData extends Component{
	constructor(props) {
		super(props);
		// this.state = {
		// 	weatherData: {}
		// }	
	}

	componentDidMount() {
		this.props.fetchWeather();
	}

	render(){
		console.log(this.props)
		if(this.props.weatherData.main == undefined){
			return (<h1>Loading...</h1>)
		}else{
			return(
				<div>
					<h1>Atlanta Weather</h1>
					&deg;{this.props.weatherData.main.temp} 
				</div>
			)
		}
	}
}

function mapStateToProps(state){
	return{
		weatherData: state.weather
	}
}

function mapDispatchToProps(dispatch){
	var dispatchedActions = {
		fetchWeather: fetchWeather
	}
	return bindActionCreators(dispatchedActions, dispatch);
}

var thingCreatedByConnectThatKnowsAboutComponentAndReduxStuff = connect(mapStateToProps,mapDispatchToProps)(WeatherData);

export default thingCreatedByConnectThatKnowsAboutComponentAndReduxStuff;