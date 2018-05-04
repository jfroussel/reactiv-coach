import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCountries } from '../actions'

class SearchBar extends Component {

    
    componentWillMount() {
        this.props.getCountries()
    }

    renderSelect() {
        const { countries } = this.props
        if(countries) {
            return (
                <select className="col-lg-6 form-control form-control-lg">
                    {
                        countries.map((country) => (
                            <option key={ country } value={ country }>{ country }</option>
                        ))
                    }
                </select>
            )
        } else {
            return <div>No country found ...</div>
        }
    }
    
    render() {
        return (
            <div>
                { this.renderSelect() }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getCountries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);