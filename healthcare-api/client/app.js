import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store';
import Main from './js/react/components/Main.js';
console.log('**INTIATING APP IN CLIENT');
ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('app')
	);

