import React from 'react'

export default class ClassList extends React.Component {
	state = {
		classArr: [],
		selectedClass: '',
		validationError: ''
	}

	componentDidMount() {
		const classUrl = 'http://www.dnd5eapi.co/api/classes/'

		fetch(classUrl)
		.then(resp => resp.json())
		.then(data => {
			let temp = data.results.map(classes => {
				return {
					name: classes.name,
					value: classes.name,
				}
			})
			this.setState({
				classArr: [{
					value: '',
					name: 'Choose Your Class!',
				}].concat(temp)
			})
		}).catch(error => console.error('error'))
	}


	render(){
		const handleChange = (event) => (
			this.setState({
				selectedClass: event.target.value,
				validationError: event.target.value === '' 
				? 'You must select a class'
				: ''
			}),

			this.props.dataImport(event.target.value)
			)

		return(
			<div>
				<select 
					value={this.state.selectedClass}
					onChange={(event) => handleChange(event)}>
					{
						this.state.classArr.map((dndClass) => 
							<option 
								key={dndClass.value} 
								value={dndClass.value}>
								{dndClass.name}
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