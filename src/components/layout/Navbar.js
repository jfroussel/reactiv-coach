import React, {Component} from 'react';
import Cover from './Cover';
import Logo from '../../assets/logo.png';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        return (
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
                                    <a className="nav-link" href="">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Your Works</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-outline-info btn-outline font-weight-normal" href="">Sign in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Cover />
            </section>

        )
    }
}

export default Navbar;
