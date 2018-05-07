import React, {Component} from 'react'
import Navbar from './Navbar'
import Developers from './Developers'
import Features from './Features'
import Footer from './Footer'
import Contact from './Contact'
import About from './About'
import Works from './Works'
import firebase from 'firebase'
import GithubList from '../../containers/GithubList'
import Members from '../../containers/MembersList'
import Countries from '../../containers/SearchBar'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            user ? this.setState({isLogged: true}) : this.setState({isLogged: false})
            
        });
    }

    render() {

        return (
            <div>
                <Navbar />
                {!this.state.isLogged &&
                <div>
                    
                    <GithubList />
                    <Members />
                    <Countries />
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