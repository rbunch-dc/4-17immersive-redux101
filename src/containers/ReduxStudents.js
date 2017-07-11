import React, {Component} from 'react'
// We need some glue between react and reudx. This component/container
// needs to know about redux state. The answer? The connect method from
// the react-redux module. The glue.
import { connect } from 'react-redux';
// Get our actions...
import SelectStudent from '../actions/SelectStudentAction';
// console.log(SelectStudent);
import Timer from '../actions/TimerAction'

// bindActionCreators is a redux function that we will tap into to
// let ALL reducers know anytime an action occured
import { bindActionCreators } from 'redux';


class ReduxStudents extends Component{
	constructor(props) {
		super(props);
		
	}

	componentDidMount() {
		setInterval(()=>{
			this.props.timerAction();
		},1000)
	}

	render(){
		console.log(this.props.timer)
		var studentArray = [];
		this.props.students.map((student,index)=>{
			studentArray.push(
				<li 
					key={index} 
					onClick={()=> {this.props.selectStudent(student)}}
				>
						{student}
				</li>
			)
		})
		return(
			<div>
				<h1>This is ReduxStudents</h1>
				{studentArray}
				<hr />
				{this.props.selectedStudent} is selected.
				<hr />
				{this.props.timer} is the apps current time.
			</div>
		)
	}
}


// function ReduxStudents(props){
// 	console.log(props.students)
// 	var studentArray = [];
// 	props.students.map((student,index)=>{
// 		studentArray.push(<li key={index}>{student}</li>)
// 	})
// 	return(
// 		<div>
// 			<h1>This is ReduxStudents</h1>
// 			{studentArray}
// 		</div>
// 	)
// }



// All containers that need access to state will have this function.
// we are creating a mapping between redux state and this components props
function mapStateToProps(state){
	// mapStateToProps returns an object with each peice of state we need
	return{
		// From our master Reducer, we have a "state" object
		// INside of that state object, we have a property: students
		// This exists because we made it a property in the root reducer
		students: state.students,
		selectedStudent: state.selectedStudent,
		timer: state.timer
	}
}

// mapDispatchToProps goes out to the dispatcher, grabs an action from it,
// and set it as a prop of this component.
function mapDispatchToProps(dispatch){
	// bindActionCreators came from above
	return bindActionCreators({
		selectStudent: SelectStudent,
		timerAction: Timer
	}, dispatch)
}

// INSTEAD of exporting the class (component), we export connect
// connect takes 2 arguments WHICH RETURN A FUNCTION that takes 1 argument
// - connect takes state mapping function (so it's avilable in component props)
// - connect takes action mapping function (ditto)
// - the return function of the connect function, takes a component
export default connect(mapStateToProps,mapDispatchToProps)(ReduxStudents);

