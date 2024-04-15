import React, { useContext } from 'react'
import authContext from '../context/authContext'

const Login = () => {
    const {isLoggedIn, setLoggedIn} = useContext(authContext)
  return (
    <div>
        <p>Login</p>
        <button onClick={()=>setLoggedIn(!isLoggedIn)} >{isLoggedIn? "Log Out": "Log In"}</button>

    </div>
  )
}

export default Login