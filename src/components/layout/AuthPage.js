import React, { Component } from 'react'
import SignIn from '../auth/SignIn'
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
                <SignUp />
                <PasswordForget />
            </div>
        )
    }
}

export default AuthPage