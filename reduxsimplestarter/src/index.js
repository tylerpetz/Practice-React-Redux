import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyASTyigDFYbbIH6s2ioREmcxZPpqSykUis';

// refactoring functional component to class based component here
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
			/*this.setState({ videos: videos });*/
			// using es6, this can be written this way when the key and property are the same variable name
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList />
			</div>
		);
	}
}

// functional component, a component that is a function aka "dumb component"
// start off with functional components, refactor as Classes when the need arises
/*const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
}*/

ReactDOM.render(<App />, document.querySelector('.container'));