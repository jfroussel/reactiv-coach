import React, { Component } from 'react';
import firebase from 'firebase'

class Profile extends Component {

    constructor(props) {

        super(props)

        this.state = {
            id:'',
            displayName: '',
            photoURL: null,
            defaultPhoto: 'https://avatars1.githubusercontent.com/u/6781828?s=64&v=4',
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            country: '',
            item: []
        }

        this.handleChange = this
            .handleChange
            .bind(this)

        this.handleSubmit = this
            .handleSubmit
            .bind(this)
    }

    componentDidMount() {
       
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({id:user.uid, email:user.email, displayName:user.displayName, photoURL:user.photoURL})
            user.updateProfile({
                displayName: this.state.displayName,
                photoURL: this.state.photoURL
            })
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase
            .database()
            .ref('members/' + this.state.id)
        const item = {
            id:this.state.id,
            displayName: this.state.displayName,
            photoURL: this.state.photoURL,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            city: this.state.city,
            country: this.state.country,

        }
        itemsRef.push(item);
        this.setState({
            id: '',
            displayName: '',
            photoURL: '',
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            country: '',
        });
    }

    render() {
         return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Member Profile</h5>
                    <img src={this.state.photoURL ? this.state.photoURL : this.state.defaultPhoto } alt="avatar" className="img-thumbnail" /> 
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="id" className="col-sm-2 col-form-label">User ID</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="id"
                                    className="form-control"
                                    disabled
                                    placeholder="userId"
                                    onChange={this.handleChange}
                                    value= {this.state.id}  />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Display name</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="displayName"
                                    className="form-control"
                                    placeholder="display name"
                                    onChange={this.handleChange}
                                    value= { this.state.displayName }  />
                            </div>        
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Photo URL</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="photoURL"
                                    className="form-control"
                                    placeholder="photo URL"
                                    onChange={this.handleChange}
                                    value= {this.state.photoURL ? this.state.photoURL : this.state.defaultPhoto }  />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">First name</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    placeholder="firstName"
                                    onChange={this.handleChange}
                                    value={this.state.firstName}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Last name</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    placeholder="lastName"
                                    onChange={this.handleChange}
                                    value={this.state.lastName}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                    value={this.state.email}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">City</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    placeholder="City"
                                    onChange={this.handleChange}
                                    value={this.state.city}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Country</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="country"
                                    className="form-control"
                                    placeholder="Country"
                                    onChange={this.handleChange}
                                    value={this.state.country}/>
                            </div>
                        </div>
                        <button className="btn btn-info">Update profile</button>
                    </form>  
                </div>
            </div> 
        )
    }
}


export default Profile