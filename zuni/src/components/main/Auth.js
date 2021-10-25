import React, { useState } from 'react'

function Auth(props) {
	const [auth, setAuth] = useState({ type: 'login', username: '' })

	const setUsername = e => { setAuth(prev => ({ ...prev, username: e.target.value })) }
	const setAuthType = value => { setAuth(prev => ({ ...prev, type: value })) }

	const handleSubmit = e => {
		e.preventDefault()
		setAuth(prev => ({ ...prev, username: '' }))
		props.submit(auth)
	}

	return (
		<main id="auth">
			<h1>Authentication Interface</h1>
			<form onSubmit={handleSubmit}>

				<div className="upper">
					<div className={auth.type === 'login' ? 'login' : ''} onClick={() => setAuthType('login')}>Login</div>
					<div className={auth.type === 'register' ? 'register' : ''} onClick={() => setAuthType('register')}>Register</div>
				</div>

				<input type="text" placeholder="Enter your username" name="username" value={auth.username} onChange={setUsername} required />
				<button type="submit">Submit</button>
			</form>
		</main>
	)
}

export default Auth
