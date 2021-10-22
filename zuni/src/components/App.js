import React from 'react';
import Nav from './header/Nav';
import Footer from './footer/Footer'
import Main from './main/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './about/About'
import Login from './main/Login'
import Register from './main/Register'
import Docs from './docs/Docs'

function App() {
	return (
		<>
			<Router>
				<Nav/>
				<Route path='/' exact component={Main}/>
				<Route path='/docs' component={Docs}/>
				<Route path='/about' component={About}/>
				<Route path='/login' component={Login}/>
				<Route path='/register' component={Register}/> 
				<Footer/>
			</Router>
		</>
	)
};

export default App;
