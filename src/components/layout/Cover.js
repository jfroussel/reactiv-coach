import React, {Component} from 'react';

class Cover extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <section className="cover-5 text-center">
                <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
                    <div className="container">
                        <a className="navbar-brand" href="">Reactiv-coach</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse pull-xs-right justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mt-2 mt-md-0">
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
                                <li className="nav-item">
                                    <a className="btn btn-outline-info btn-outline" href="">Sign in</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="cover-container pb-5 ">
                    <div className="cover-inner container">
                        <p className="lead ">A collection of coded HTML and CSS elements</p>
                        <div className="divider"></div>
                        <h1 className="jumbotron-heading">Say <em>hello</em> to our	<strong>Startup UI Kit</strong></h1>
                        <div className="row">
                            <div className="m-auto col-md-4 mt-5">
                                <button type="submit" className="btn btn-lg btn-info pill-btn mt-5">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cover;
