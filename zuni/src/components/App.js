import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './header/Nav';
import Footer from './footer/Footer'
import Home from './main/Home';
import Main from './main/Main'
import About from './about/About'
import Examples from './examples/Examples'
import NotFound from './main/NotFound'

function App() {
	return (
		<>
			<Router>
				<Nav/>
				<Switch>
					<Route path='/' exact component={Home}/>
					<Route path='/demo' exact component={Examples}/>
					<Route path='/about' exact component={About}/>
					<Route path='/auth' exact component={Main}/>
					<Route component={NotFound} />
				</Switch>
				<Footer/>
			</Router>
		</>
	)
};

export default App;
