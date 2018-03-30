import React, { Component } from 'react';
import Card from './Card';


class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="container">
                <div className="row pb-2">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="row pb-2">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="row pb-2">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}

export default Content;