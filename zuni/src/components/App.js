import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './header/Nav';
import Footer from './footer/Footer'
import Home from './main/Home';
import Main from './main/Main'
import About from './about/About'
import Docs from './docs/Docs'

function App() {
	return (
		<>
			<Router>
				<Nav/>
				<Route path='/' exact component={Home}/>
				<Route path='/docs' component={Docs}/>
				<Route path='/about' component={About}/>
				<Route path='/auth' component={Main}/>
				<Footer/>
			</Router>
		</>
	)
};

export default App;
