import React from 'react';
import ReactDOM from 'react-dom';
import API from './api_key';
import SearchBar from './components/search_bar';

const key = API.key;

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('.container'));