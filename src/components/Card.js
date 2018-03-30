import React, { Component } from 'react';
import img from '../assets/girl.jpg';
import FormComponent from './StarRating';


class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            
                <div className="col-4">
                    <div className="card rounded">
                        <div className="text-center pt-3 bg-light">
                            <img className="card-img-top rounded-circle w-25" src={img} alt="Card  cap"/>
                        </div>
                        <div className="card-body">
                                
                            <h5 className="card-title">Hilary doe</h5>
                            <p className="small text-muted">Category : Programming</p>
                            <p className="card-text small">Some quick example text to build on the card title and make up.</p>
                            <hr />
                            <div className="row">
                                <div className="col-8 text-left">
                                    <FormComponent />
                                </div>
                                <div className="col-4 text-right">
                                    <i className="far fa-user-circle fa-2x text-info align-bottom"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}

export default Card;
