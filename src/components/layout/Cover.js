import React, { Component } from 'react';
import ScrollableAnchor, { } from 'react-scrollable-anchor'
import firebase from 'firebase'

class Cover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnDev: 'Are you a dev ?',
            btnFindDev: 'Find a dev  !',
            userName: '',
            userEmail: '',
        }
    }

    componentWillReceiveProps() {
        let user = firebase.auth().currentUser;

        if (user != null) {
            this.setState({ userEmail: user.email })
        }
    }

    render() {

        return (
            <ScrollableAnchor id={'cover'}>
                <section className="cover-container pb-5 text-center">
                    <div className="cover-inner container">
                        <p className="lead ">
                            The first developers platform around ecosystem<br /> REACTJS and REDUX</p>
                        <p className="lead">{this.state.userEmail}</p>
                        <div className="divider"></div>
                        <h1 className="jumbotron-heading">Say
                            <em> hello </em>
                            to your
                            <strong>Apps</strong>
                        </h1>
                        <div className="row">
                            <div className="m-auto col-md-6 mt-5">
                                <a href="#developers" className="btn btn-lg btn-info pill-btn mt-5 font-weight-normal">{this.state.btnDev}</a>
                            </div>
                            <div className="m-auto col-md-6 mt-5">
                                <a href="#developers" className="btn btn-lg btn-info pill-btn mt-5 font-weight-normal">{this.state.btnFindDev}</a>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Cover;
