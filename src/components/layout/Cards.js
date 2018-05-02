import React, {Component} from 'react';
import Paris from '../../assets/paris.jpeg';
import Nyc from '../../assets/nyc.png';
import Quebec from '../../assets/quebec.jpeg';
import User from '../../assets/jeff.JPG';

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        return (
            <div className="row">
                <div className="col-md-4 col-feature">
                    <div className="card">
                        <img className="card-img-top" src={Paris} alt="Card  cap" />
                        <div className="card-body">
                            <h5 className="card-title pt-3 text-muted">Jeff Roussel</h5>
                            <h6 className="text-muted small">ReactJS / Redux / Firebase</h6>
                            <h6 className="text-muted small">Status: Freelance </h6>
                            <h6 className="text-muted small">Since: 2010 </h6>
                            <hr />
                            <a href="" className="nav-link text-info">Visit me</a>
                        </div>
                        <div className="card-profil-img">
                            <img className="card-img-top rounded-circle" src={User} alt="Card  cap" />
                        </div>
                        
                        <div className="card-social-link pb-2 text-center" >
                            <div className="pr-3  d-inline"><i className="fas fa-globe fa-1x text-muted"></i></div>
                            <div className="pr-3  d-inline"><i className="fab fa-github fa-1x text-muted "></i></div>
                            <div className="pr-3  d-inline"><i className="fab fa-facebook-f fa-1x text-muted "></i></div>
                            <div className="pr-3  d-inline"><i className="fab fa-twitter fa-1x text-muted "></i></div>
                            <div className="pr-3  d-inline"><i className="fab fa-instagram fa-1x text-muted "></i></div>
                            <div className="pr-3  d-inline"><i className="fab fa-google fa-1x text-muted "></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-feature">
                    <div className="card">
                        <img className="card-img-top" src={Nyc} alt="Card  cap" />
                        <div className="card-body">
                            <h5 className="card-title pt-3 text-muted">Jeff Roussel</h5>
                            <h6 className="text-muted small">ReactJS / Redux / Firebase</h6>
                            <h6 className="text-muted small">Status: Freelance </h6>
                            <h6 className="text-muted small">Since: 2010 </h6>
                            <hr />
                            <a href="" className="nav-link text-info">Visit me</a>
                        </div>
                        <div className="card-profil-img">
                            <img className="card-img-top rounded-circle" src={User} alt="Card  cap" />
                        </div>
                        <div className="card-social-link pb-2 text-center">
                            <span className="pr-3 "><i className="fas fa-globe fa-1x text-muted "></i></span>
                            <span className="pr-3 "><i className="fab fa-github fa-1x text-muted "></i></span>
                            <span className="pr-3 "><i className="fab fa-facebook-f fa-1x text-muted "></i></span>
                            <span className="pr-3 "><i className="fab fa-twitter fa-1x text-muted "></i></span>
                            <span className="pr-3 "><i className="fab fa-instagram fa-1x text-muted "></i></span>
                            <span className="pr-3 "><i className="fab fa-google fa-1x text-muted "></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-feature">
                    <div className="card">
                        <img className="card-img-top" src={Quebec} alt="Card  cap" />
                        <div className="card-body">
                            <h5 className="card-title pt-3 text-muted">Jeff Roussel</h5>
                            <h6 className="text-muted small">ReactJS / Redux / Firebase</h6>
                            <h6 className="text-muted small">Status: Freelance </h6>
                            <h6 className="text-muted small">Since: 2010 </h6>
                            <hr />
                            <a href="" className="nav-link text-info">Visit me</a>
                        </div>
                        <div className="card-profil-img">
                            <img className="card-img-top rounded-circle" src={User} alt="Card  cap" />
                        </div>
                        <div className="card-social-link pb-2 text-center">
                            <span className="pr-3 "><i className="fas fa-globe fa-1x text-muted "></i></span>
                            <span className="pr-3 "><i className="fab fa-github fa-1x text-muted "></i></span>
                            <span className="pr-3 "><i className="fab fa-facebook-f fa-1x text-muted "></i></span>
                            <span className="pr-3 "><i className="fab fa-twitter fa-1x text-muted "></i></span>
                            <span className="pr-3 "><i className="fab fa-instagram fa-1x text-muted "></i></span>
                            <span className="pr-3 "><i className="fab fa-google fa-1x text-muted "></i></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;
