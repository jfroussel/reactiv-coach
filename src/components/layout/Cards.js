import React, {Component} from 'react';
import Paris from '../../assets/paris.jpeg';
import Nyc from '../../assets/nyc.png';
import Quebec from '../../assets/quebec.jpeg';
import User from '../../assets/jeff.jpg';

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
                        <img className="card-img-top" src={Paris} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title pt-3 text-muted">Jeff Roussel</h5>
                            <h6 className="text-muted small">ReactJS / Redux / Firebase</h6>
                            <h6 className="text-muted small">Status: Freelance </h6>
                            <h6 className="text-muted small">Since: 2010 </h6>
                            <hr />
                            <a href="" className="nav-link text-muted">Visit me</a>
                        </div>
                        <div className="card-profil-img">
                            <img className="card-img-top rounded-circle" src={User} alt="Card image cap" />
                        </div>
                        
                        <div className="card-social-link pb-2" text-center>
                            <span className="pr-3"><i class="fas fa-globe fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-github fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-facebook-f fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-twitter fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-instagram fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-google fa-1x text-dark"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-feature">
                    <div className="card">
                        <img className="card-img-top" src={Nyc} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title pt-3 text-muted">Jeff Roussel</h5>
                            <h6 className="text-muted small">ReactJS / Redux / Firebase</h6>
                            <h6 className="text-muted small">Status: Freelance </h6>
                            <h6 className="text-muted small">Since: 2010 </h6>
                            <hr />
                            <a href="" className="nav-link text-muted">Visit me</a>
                        </div>
                        <div className="card-profil-img">
                            <img className="card-img-top rounded-circle" src={User} alt="Card image cap" />
                        </div>
                        <div className="card-social-link pb-2" text-center>
                            <span className="pr-3"><i class="fas fa-globe fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-github fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-facebook-f fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-twitter fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-instagram fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-google fa-1x text-dark"></i></span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-feature">
                    <div className="card">
                        <img className="card-img-top" src={Quebec} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title pt-3 text-muted">Jeff Roussel</h5>
                            <h6 className="text-muted small">ReactJS / Redux / Firebase</h6>
                            <h6 className="text-muted small">Status: Freelance </h6>
                            <h6 className="text-muted small">Since: 2010 </h6>
                            <hr />
                            <a href="" className="nav-link text-muted">Visit me</a>
                        </div>
                        <div className="card-profil-img">
                            <img className="card-img-top rounded-circle" src={User} alt="Card image cap" />
                        </div>
                        <div className="card-social-link pb-2" text-center>
                            <span className="pr-3"><i class="fas fa-globe fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-github fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-facebook-f fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-twitter fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-instagram fa-1x text-dark"></i></span>
                            <span className="pr-3"><i class="fab fa-google fa-1x text-dark"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;
