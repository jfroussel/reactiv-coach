import React, {Component} from 'react'
import Navbar from './Navbar'
import Developers from './Developers'
import Features from './Features'
import Footer from './Footer'
import Contact from './Contact'
import About from './About'
import Works from './Works'
import {auth} from '../../firebase'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <Navbar />
                {!auth.currentUser() &&
                <div>
                    <Features />
                    <Developers />
                    <About />
                    <Contact />
                    <Works />
                    <Footer />
                </div>
                }
            </div>
        )
    }
}

export default Home;