import React, {Component} from 'react';
import Cover from './Cover';
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
            <Cover />
            <Features />
            <Contact />
            <Footer />
            </div>

        )
    }
}

export default Home;