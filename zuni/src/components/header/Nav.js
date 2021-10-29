import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<header>
			<h1>ZUNI</h1>
			<ul className="nav-items">
				<Link className='link-text' to='/' exact><li>HOME</li></Link>
				<Link className='link-text' to='/demo'><li>DEMO</li></Link>
				<Link className='link-text' to='/about'><li>ABOUT</li></Link>
				<Link className='link-text' to='/auth' exact><li>AUTH</li></Link>
			</ul>
		</header>
	)
}

export default Nav
