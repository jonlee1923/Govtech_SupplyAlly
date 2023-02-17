import React from 'react'
import "./loginButton.css"
type Props = {
    login: () => void;
}

export default function LoginButton({login}: Props) {


  return (
    <button className="loginButton">
        <p className='loginButtonText font-ibm' onClick={login}>Login</p>
    </button>
  )
}
