import React, { Component } from 'react'
import SignIn from '../auth/SignIn'
import PasswordForget from '../auth/PasswordForget'
import SignUp from '../auth/SignUp'

class AuthPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            passwordForgetStatus: false,
            signupStatus: false,
            
        }
    }

    componentWillMount() {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                {this.state.passwordForgetStatus || this.state.signupStatus ? null : <SignIn />} 
                {!this.state.passwordForgetStatus ? null : <PasswordForget status={this.state.passwordForgetStatus}/>}
                {!this.state.signupStatus ? null : <SignUp status={this.state.signupStatus} />}
            </div>
        )
    }
}

export default AuthPage