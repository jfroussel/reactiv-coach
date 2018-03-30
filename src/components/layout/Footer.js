import React, {Component} from 'react';


class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <footer className="footer-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav-footer mt-2 mt-md-0 ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Our Work</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="divider"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-left mt-2 mb-3 pt-1">
                            <p>Copyright &copy; YourStartup. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-right mb-4">
                            <ul className="social">
                                <li><a href="" title="Facebook" className="fab fa-facebook-f"></a></li>
                                <li><a href="" title="Twitter" className="fab fa-twitter"></a></li>
                                <li><a href="" title="Google+" className="fab fa-google"></a></li>
                                <li><a href="" title="Dribbble" className="fab fa-dribbble"></a></li>
                                <li><a href="" title="Instagram" className="fab fa-instagram"></a></li>
                                <div className="clear"></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer;