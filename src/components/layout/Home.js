import React, {Component} from 'react';
import Navbar from './Navbar';
import Features from './Features';
import Footer from './Footer';
import Contact from './Contact';
import Content from './Content';

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
            <Contact />
            <Footer />
            </div>

        )
    }
}

export default Home;