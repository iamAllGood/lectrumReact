import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GroceryList from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GroceryList />, document.getElementById('root'));
registerServiceWorker();
