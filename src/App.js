import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		//firebase config
		const config = {
			apiKey: 'AIzaSyAyg-Hrlsux8HJDaLAg1zENA9fHMC2ywLU',
			authDomain: 'manager-bdd58.firebaseapp.com',
			databaseURL: 'https://manager-bdd58.firebaseio.com',
			storageBucket: 'manager-bdd58.appspot.com',
			messagingSenderId: '964922347943'
		};
		firebase.initializeApp(config);
	}

	render() {
		//o segundo argumento, {}, é utilizado para passar valores iniciais aos reducers
		//o terceiro argumento é chamado de Store Enhancers, ele adiciona novas funcionalidades ao store
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider> 
		);
	}
}

export default App;
