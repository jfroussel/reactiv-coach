import React, { Component } from 'react';
import Cards from './Cards';

class Developers extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section className="features-1 text-center">
                <div className="container">
                    <h2 className="font-weight-normal">Dev profils</h2>
                    <div className="divider"></div>
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </section>
        )
    }
}
                
export default Developers;