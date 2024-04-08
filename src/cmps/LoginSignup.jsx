import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
import { ImgUploader } from './ImgUploader'

export function LoginSignup(props) {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(props.isLogInSelect)
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    function clearState() {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
        // setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        props.onLogin(credentials)
        clearState()
    }

    function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname) return
        props.onSignup(credentials)
        clearState()
    }

    function toggleSignup() {
        setIsSignup(!isSignup)
    }

    function onUploaded(imgUrl) {
        setCredentials({ ...credentials, imgUrl })
    }
    console.log('credentials:', credentials)
    return (
        <div className="login-page">
            <article className="login-ad-container">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/standard.0638957.png" alt="" />
                <section className="login-ad">
                    <h1>Success starts here</h1>

                    <p><span className="fa ad-cheack"></span> Over 600 categories</p>
                    <p><span className="fa ad-cheack"></span> Pay per project, not per hour</p>
                    <p><span className="fa ad-cheack"></span> Access to talent and businesses across the globe</p>


                </section>

            </article>
            <section className="login-signup">


                <div className="login-section">
                    {!isSignup && <>
                        <section className="login-form-article">
                            <h1>Sign in to your account</h1>
                            <p>
                                Don't have an account ? <span className="btn-link" onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</span>
                            </p>
                        </section>
                        <form className="login-form" onSubmit={onLogin}>
                            {/* <select
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                            >
                                <option value="">Select User</option>
                                {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                            </select> */}
                            <input
                                type="text"
                                name="username"
                                value={credentials.username}
                                placeholder="Username"
                                onChange={handleChange}
                                // required
                                autoFocus
                            />
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                placeholder="Password"
                                onChange={handleChange}
                            // required
                            />
                            <button>Login!</button>
                        </form>
                    </>
                    }
                </div>

                <div className="signup-section">
                    {isSignup && <>
                        <section className="signup-form-article">
                            <h1>Create a new account</h1>
                            <p>
                                Already have an account? <span className="btn-link" onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</span>
                            </p>
                        </section>
                        <form className="signup-form" onSubmit={onSignup}>
                            <input
                                type="text"
                                name="fullname"
                                value={credentials.fullname}
                                placeholder="Fullname"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="username"
                                value={credentials.username}
                                placeholder="Username"
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                            <ImgUploader onUploaded={onUploaded} />
                            <button >Signup!</button>
                        </form>
                    </>
                    }
                </div>
                <p>By joining, you agree to the Fiverr <span>Terms of Service</span> and to occasionally receive emails from us. Please read our <span>Privacy Policy</span> to learn how we use your personal data.</p>
            </section>

        </div>
    )
}