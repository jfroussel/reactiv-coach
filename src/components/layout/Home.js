import React, {Component} from 'react'
import Navbar from './Navbar'
import Developers from './Developers'
import Features from './Features'
import Footer from './Footer'
import Contact from './Contact'
import About from './About'
import Works from './Works'

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
                <Features />
                <Developers />
                <About />
                <Contact />
                <Works />
                <Footer />
            </div>

        )
    }
}

export default Home;