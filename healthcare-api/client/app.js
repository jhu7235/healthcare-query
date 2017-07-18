import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './Main';

ReactDom.render(
	<Provider store={store}>
		<Main />
		<h1>APP.JS</h1>
	</Provider>
	);
