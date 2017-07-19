import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store';
import history from './js/history';
import Main from './js/react/components/Main.js';
import { Router } from 'react-router';


console.log('**INTIATING APP IN CLIENT');
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Main />
		</Router>
	</Provider>,
	document.getElementById('app')
	);

