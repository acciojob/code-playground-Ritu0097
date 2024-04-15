import React, { useContext } from 'react'
import authContext from '../context/authContext'
import Login from './Login'

const Playground = () => {
    const {isLoggedIn} = useContext(authContext)
  return (
    <div>
        {
            isLoggedIn?
            "Hi Welcome to Code PlayGround"
            :
            <Login/>
        }
    </div>
  )
}

export default Playground