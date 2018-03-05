import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBbi2nJH-DSvbqgCw7rHZUKo_G4m3P97RI';

// refactoring functional component to class based component here
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, videos => {
			/*this.setState({ videos: videos });*/
			// using es6, this can be written this way when the key and property are the same variable name
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
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