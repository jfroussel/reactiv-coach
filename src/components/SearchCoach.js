import React, {Component} from 'react';
import * as firebase from 'firebase';
import '../firebase';


class SearchCoach extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoriesList: {},
            value: 'programming',
            dropdownTitle: 'Search by category'
        }

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleClick = this
            .handleClick
            .bind(this);

    }

    componentDidMount() {

        this.firebaseRef = firebase
            .database()
            .ref()
            .child('categories');
        this.firebaseCallback = this
            .firebaseRef
            .on('value', snap => {
                this.setState({
                    categoriesList: Object.keys(snap.val())
                });
            });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        event.preventDefault();

    }

    handleSubmit(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
        this.setState({value: ''});
    }

    handleClick(event) {
        this.setState({value: event.target.text});
        event.preventDefault();
    }

    render() {
        const categories = this.state.categoriesList;
        const todoItems = Object
            .values(categories)
            .map((category, index) => <a className="dropdown-item" href="" key={index}>{category}
            </a>);

        return (

            <form className="form-inline my-2 my-lg-0 " onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle text-white small"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">{this.state.dropdownTitle}</button>
                        <div className="dropdown-menu" onClick={this.handleClick}>
                            {todoItems}
                        </div>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Text input with dropdown button"
                        placeholder={this.state.value}
                        value={this.state.value}
                        onChange={this.handleChange}/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Go !</button>
                </div>
            </form>

        )
    }
}
export default SearchCoach;