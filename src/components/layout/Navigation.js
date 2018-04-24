import React from 'react'
import {auth} from '../../firebase'

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
        <a className="nav-item nav-link"> <em>you are now connected</em><span className="text-info">  { auth.currentUser().email }</span></a>
       
    </div>

export {
    PrivateNavigation,
    PublicNavigation
}
