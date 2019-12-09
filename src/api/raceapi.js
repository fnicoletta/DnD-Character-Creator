import React from 'react'

export default class RaceList extends React.Component {
	state = {
		raceArr: [],
		selectedRace: '',
		validationError: ''
	}

	componentDidMount() {
		const classUrl = 'http://www.dnd5eapi.co/api/races/'

		fetch(classUrl)
		.then(resp => resp.json())
		.then(data => {
			let temp = data.results.map(races => {
				return {
					name: races.name,
					value: races.name,
				}
			})
			console.log(temp)
			this.setState({
				raceArr: [{
					value: '',
					name: 'Choose Your Race!',
				}].concat(temp)
			})
		}).catch(error => console.error('error'))
	}


	render(){
		const handleChange = (event) => (
			this.setState({
				selectedRace: event.target.value,
				validationError: event.target.value === '' 
				? 'You must select a race'
				: ''
			}),

			this.props.dataImport(event.target.value)
			)

		return(
			<div>
				<select 
					value={this.state.selectedRace}
					onChange={(event) => handleChange(event)}>
					{
						this.state.raceArr.map((race) => 
							<option 
								key={race.value} 
								value={race.value}>
								{race.name}
							</option>)
					}
				</select>
				<div style={{color: 'red', marginTop: '5px'}}>
					{this.state.validationError}
				</div>
			</div>
			
		)
	}
}