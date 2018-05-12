import React, { Component } from 'react';
import Cards from './Cards';
import ScrollableAnchor, {   } from 'react-scrollable-anchor'


class Developers extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <ScrollableAnchor id={'developers'}>
                <section className="features-1 text-center">
                    <div className="container">
                        <h2 className="font-weight-light">Dev profils</h2>
                        <p className="lead constrain-width mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum sapien.</p>
                        <div className="divider"></div>
                    </div>
                    <div className="row">
                    <Cards />
                    </div>
                    
                </section>
            </ScrollableAnchor>
        )
    }
}
                
export default Developers;