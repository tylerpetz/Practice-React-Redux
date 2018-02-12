import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyDxL_d80NGlserQwO-uHI3tutm9LiGRr-o';

const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));