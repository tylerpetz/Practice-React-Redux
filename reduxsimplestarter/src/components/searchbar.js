// Import react and pull off the properity "Component" as a var called Component
import React, { Component } from 'react';

// functional component, a component that is a function aka "dumb component"
// start off with functional components, refactor as Classes when the need arises

/*const SearchBar = () => {
	return <input />;
};*/

// ES6 Class
// define a new class called "SearchBar"
// give it all the functionality of React.Component
// Self aware of state, surroundings, easier communication with other 
// components

/*class SearchBar extends React.Component {
	syntax for rendering inside a class
	every class must have a render function
	render() {
		return <input />;
	}
}*/

// refactoring with { Component }, replaces
// const Component = React.Component
class SearchBar extends Component {
	// how to initialize state in a class based component
	// constructor function is called automatically when a new instance
	// of the class is called
	// reserved for initializing variables, state, etc
	constructor(props) {
		// "black magic"
		super(props);

		// create new object, assign it to this.state
		// within object is our properties

		// each instance of a class based component has it's own copy of state
		this.state = { term: '' };
	}

	render() {
		// when we tell the input that it's value is provided by by this.state.term
		// we turn it into a "controlled component" or "controlled form element"
		// it has it's value set by state, so the value only changes if the state changes
		return (
		<div>
			<input 
				value={this.state.term}
				onChange={event => this.setState({ term: event.target.value })} />
		</div>
		);
	}

	// this is how we work with state outside of main constructor, using setState
	// this.state.term = event.target.value -- NEVER DO THIS, BAD!!!! BAD!
	// refactored to inline onChange
/*	onInputChange(event) {
		this.setState({ term: event.target.value });
	}*/

	// refactored smaller
	/*render() {
		return <input onChange={event => console.log(event.target.value)} />;
	}*/
};

export default SearchBar;