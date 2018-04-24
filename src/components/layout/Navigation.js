import React from 'react'

const PublicNavigation = () =>
    <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#home">Home <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#features">Features</a>
        <a className="nav-item nav-link" href="#developers">Developers</a>
        <a className="nav-item nav-link" href="#works">Works</a>
        <a className="nav-item nav-link" href="#about">About</a>
        <a className="nav-item nav-link" href="#contact">Contact</a>
    </div>
    

const PrivateNavigation = () =>
    <div className="navbar-nav">
        <a className="nav-item nav-link active" href="">Account <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="">Profile</a>
        <a className="nav-item nav-link" href="">Messages</a>
        <a className="nav-item nav-link" href="">Analytic</a>
    </div>

export {
    PrivateNavigation,
    PublicNavigation
}
