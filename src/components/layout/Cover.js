import React, {Component} from 'react';

class Cover extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        return (
            <div className="cover-container pb-5">
                <div className="cover-inner container">
                    <p className="lead ">
                    The first developer platform REACTJS and REDUX</p>
                    <div className="divider"></div>
                    <h1 className="jumbotron-heading">Say 
                        <em> hello </em>
                            to your
                        <strong>Apps</strong>
                    </h1>
                    <div className="row">
                        <div className="m-auto col-md-6 mt-5">
                            <button type="submit" className="btn btn-lg btn-info pill-btn mt-5 font-weight-normal">Are you a dev ?</button>
                        </div>
                        <div className="m-auto col-md-6 mt-5">
                            <button type="submit" className="btn btn-lg btn-info pill-btn mt-5 font-weight-normal">
                            find your dev !</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cover;
