import React from 'react'
import RaceList from '../api/raceapi.js'
import ClassList from '../api/classapi.js'
import LoadingScreen from 'react-loading-screen'

export default class CharSheet extends React.Component {
	state = {
		name: '',
		selectedClass: '',
		selectedRace: '',
		isLoading: true
	}

	nameChange = (event) => {
		this.setState({
		name: event.target.value
	})}

	importClassData = (data) => {
		this.setState({
			selectedClass: data,
		})
	}

	importRaceData = (data) => {
		this.setState({
			selectedRace: data,
		})
	}

	componentDidMount() {
		this.setState({
			isLoading: false
		})
	}


	render(){
		return(
			<React.Fragment>
			<h1 className='tc dfont light-red f-headline pa0 ma0'>DnD 5e Character Creator</h1>
			<div className='flex center items-center justify-center tc'>
			<form className='shadow-3 bg-light-red br3'>
				<div className='pa2'>
				<label htmlFor='name'>Name:</label>
				<br/>
				<input 
					type='text'
					id='name'
					value={this.state.name}
					placeholder={`Rolfor d'Ception`}
					onChange={this.nameChange}
				/>
				</div>
				<div className='pa2'>
				<label htmlFor='race'>Race:</label>
					<RaceList id='race' dataImport={this.importRaceData}/>
				</div>
				<div className='pa2'>
				<label htmlFor='class'>Class:</label>
					<ClassList id='class' dataImport={this.importClassData}/>
				</div>
				<button className='grow no-underline br-pill ph3 pv2 mb2 dib'>Submit</button>
			</form>
			</div>
			</React.Fragment>
			)
	}
	
}