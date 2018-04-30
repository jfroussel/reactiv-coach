import React, { Component } from 'react';
import firebase from 'firebase'

class Account extends Component {

    constructor(props) {
        super(props)
        this.state = {
            uid: '',
            displayName: null,
            photoURL: null,
            email: '',
            emailVerified: null,
            phoneNumber: null,
            isAnonymous: null,
            apiKey: ''
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(JSON.stringify(user, null, 3))

            this.setState(
                {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    phoneNumber: user.phoneNumber,
                    isAnonymous: user.isAnonymous,
                    apiKey: user.apiKey
                }
            )
        });

    }



    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Member Account</h5>
                    <ul className="list-group">
                        <li className="list-group-item">uid : {this.state.uid}</li>
                        <li className="list-group-item">display name : {this.state.displayName ? this.state.displayName : 'undefined'}</li>
                        <li className="list-group-item">photo url : {this.state.photoURL ? this.state.photoURL : 'undefined'}</li>
                        <li className="list-group-item">email : {this.state.email}</li>
                        <li className="list-group-item">api key : {this.state.apiKey}</li>
                    </ul>
                    <hr />
                    <a href="/" className="btn btn-info">Update account</a>

                </div>
            </div>
        )
    }
}

export default Account