import React, {Component} from 'react';
import Navbar from './Navbar';
import Developers from './Developers';
import Features from './Features';
import Footer from './Footer';
import Contact from './Contact';

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
            <Developers />
            <Features />
            <Contact />
            <Footer />
            </div>

        )
    }
}

export default Home;