import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import store from './js/store';
import history from './js/history';
import Main from './js/react/components/Main.js';
import Landing from './js/react/components/Landing.js';
import { Router } from 'react-router';


console.log('**INTIATING APP IN CLIENT');
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Switch>
				<Route exact path="/patient" component={Main} />
				<Route path="/" component={Landing} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('app')
);

