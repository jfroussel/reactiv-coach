import React, { Component } from 'react'
import Cover from './Cover'
import Logo from '../../assets/logo.png'
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';
import { auth } from '../../firebase'
import { doSignOut } from '../../firebase/auth'
import AuthPage from './AuthPage'



class Navbar extends Component {


    constructor(props) {
        super(props);
        this.state = {
            signStatus: 'sign in',
            user: false
        }
    }
    componentWillMount() {
        const user = auth.currentUser()
        if (user) {
            console.log(`Component will mount : user ${user.email} is connected`)
        } else {
            console.log(`Component will mount : no user connected`)
        }
    }
    componentWillReceiveProps() {
        const user = auth.currentUser()
        if (user) {
            this.setState({
                signStatus: 'sign out',
                user: true
            })
            console.log(`Component will received props : user ${user.email} is connected`)
        } else {
            this.setState({
                signStatus: 'sign in',
                user: false
            })

            console.log(`Component will received props : no user connected`)
        }
    }

    render() {
        return (
            <ScrollableAnchor id={'home'}>
                <section className="cover-5 text-center">
                    <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
                        <div className="container">
                            <a className="navbar-brand pt-2" href="">
                                <img src={Logo} width="250" alt="" onClick={doSignOut} />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div
                                className="collapse navbar-collapse pull-xs-right justify-content-end"
                                id="navbarSupportedContent">
                                <ul className="navbar-nav mt-2 mt-md-0">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#home">Home
                                        <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#features">Features</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#developers">Developers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#works">Works</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                    
                                    {!this.state.user ?

                                        <li className="nav-item">
                                            <a
                                                className="nav-link text-info"
                                                href=""
                                                data-toggle="collapse"
                                                data-target="#collapse"
                                                aria-expanded="false"
                                            >{this.state.signStatus}</a>
                                        </li>
                                        :
                                        null                                   
                                    }
                                    {this.state.user ? 
                                    <li className="nav-item dropdown pl-5">
                                        <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-user-circle text-info fa-2x"></i>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="">Action</a>
                                            <a className="dropdown-item" href="">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="" onClick={doSignOut}>{this.state.signStatus}</a>
                                        </div>
                                    </li> : null }
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="collapse" id="collapse">
                        <div className="card card-body">
                            {auth.currentUser() ? null : <AuthPage />}
                        </div>
                    </div>
                    <Cover />
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Navbar;
