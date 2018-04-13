import React, { Component } from 'react'
import SignIn from '../auth/SignIn'
import SignOut from '../auth/SignOut'
import SignUp from '../auth/SignUp'
import PasswordForget from '../auth/PasswordForget'

class AuthPage extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <SignIn />
                <SignOut />
                <SignUp />
                <PasswordForget />
            </div>
        )
    }
}

export default AuthPage