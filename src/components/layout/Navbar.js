import React, {Component} from 'react'
import Cover from './Cover'
import Logo from '../../assets/logo.png'
import SignIn from '../auth/SignIn'
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ScrollableAnchor id={'home'}>
            <section className="cover-5 text-center">
                <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
                    <div className="container">
                        <a className="navbar-brand pt-2" href="">
                        <img src={Logo} width="250"  alt=""/>
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
                                <li className="nav-item">
                                    <a 
                                        className="btn btn-outline-info btn-outline font-weight-normal" 
                                        href="#home" 
                                        data-toggle="collapse" 
                                        data-target="#collapseExample" 
                                        aria-expanded="false">Sign in
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                <div className="collapse pt-5" id="collapseExample">
                    <div className="card card-body">
                        <SignIn />
                    </div>
                </div>
                <Cover />
            </section>
            </ScrollableAnchor>

        )
    }
}

export default Navbar;
