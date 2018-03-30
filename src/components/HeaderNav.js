import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import SearchCoach from './SearchCoach';

class HeaderNav extends Component {

    constructor(props) {
        super(props);
        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand text-info" href="/">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top App-logo"
                            alt=""/>
                        React-coaching
                    </a>
                    <SearchCoach/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Sign In</button>
                </nav>
            </div>
        
        )
    }
}

export default HeaderNav;