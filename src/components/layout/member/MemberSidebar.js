import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/AuthRoutes'


class MemberSidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            className: 'list-group-item text-muted',
            active: false
        }
    }


    render() {
       
        return (
            <div className="list-group">
                <Link to="/account" className={this.state.className}>Account</Link>
                <Link to="/profile" className={this.state.className}>Profile</Link>
                <Link to="/messages" className={this.state.className}>Messages</Link>
                <Link to="/analytic" className={this.state.className}>Analytic</Link>
            </div>
        )
    }
}

export default MemberSidebar