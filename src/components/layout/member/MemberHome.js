import React, { Component } from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import {auth} from '../../../firebase'
import firebase from 'firebase'
import * as routes from '../../../constants/AuthRoutes'
import Account from './Account'
import Profile from './Profile'
import Messages from './Messages'
import Analytic from './Analytic'
import MemberSidebar from './MemberSidebar'


class MemberHome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            authUser: null,
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(authUser => {
          authUser
            ? this.setState(() => ({ authUser }))
            : this.setState(() => ({ authUser: null }));
        });
    }

    render() {

        return(
            <Router>
                <section className="container text-left member-home">
                    <div className="row">
                        <div className="col-3">
                            <MemberSidebar />
                        </div>
                        <div className="col-9">
                        <Route 
                            exact path={routes.ACCOUNT}
                            component={() => <Account />}
                                 
                        />
                        <Route 
                            exact path={routes.PROFILE}
                            component={() => <Profile />}
                                 
                        />
                        <Route 
                            exact path={routes.MESSAGES}
                            component={() => <Messages />}
                                 
                        />
                        <Route 
                            exact path={routes.ANALYTIC}
                            component={() => <Analytic />}
                                 
                        />
                        </div>
                    </div>
                </section>
            </Router>
        )
    }

}

export default MemberHome