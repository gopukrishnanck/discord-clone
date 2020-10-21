import { Button } from '@material-ui/core'
import React from 'react'
import {auth,provider} from './Firebase'
import './Login.css'
// import Button from '@material-ui/icons/Button'

function Login() {
    const signin=()=>{
        console.log('fn called');
    //google login
    auth.signInWithPopup(provider)
    .catch(error=>alert(error.message))

    }
    return (
        <div className="login">
            <div className="button1">
           <Button  onClick={signin}>sign In With Mail</Button>
            </div>
            
        </div>
    )
}

export default Login
