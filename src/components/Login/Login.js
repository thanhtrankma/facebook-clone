import React from 'react';
import './Login.css';

// context api
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../state/Provider'
import { actionTypes } from '../../state/reducer'

// images and icons
import fbLogo from '../../img/fbLogo.webp'
import fbTextLogo from '../../img/fbTextLogo.svg'
import { Button } from '@material-ui/core';

const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        dispatch({
                type: actionTypes.SET_USER,
                user: {
                    displayName: "Thành Trần",
                    email: "tranthanhkk@gmail.com"
                }
            });
        // sign in
    }

    return (
        <div className="login">
            <div className="loginLogo">
                <img src={fbLogo} alt=""/>
                <img src={fbTextLogo} alt="facebook"/>
            </div>

            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
