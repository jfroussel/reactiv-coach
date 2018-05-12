import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getDevelopers, getCountries } from '../actions'


class GithubList extends Component {


    componentWillMount() {
        this.props.getDevelopers()
        this.props.getCountries()
    }

    countriesList() {
        const { pays } = this.props
        return (
            JSON.stringify(pays)
        )
    }

    githubList() {
        const { devs } = this.props

        if (devs) {
            return (
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>avatar</td>
                                <td>name</td>
                                <td>login</td>
                                <td>id</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                devs.map((dev) => {
                                    return (
                                        <tr key={ dev.login}>
                                            <td><img src={dev.avatar_url} alt={dev.login} width="50px" className="rounded-circle" /></td>
                                            <td>{ dev.name }</td>
                                            <td>{ dev.login }</td>
                                            <td>{ dev.id }</td>
                                        </tr>
                                    )
                                }) 
                            }
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return <div>no github developers found...</div>
        }
    }


    render() {
        return (
            <div className="container">
                {this.countriesList()}
                {this.githubList()}
            </div>
        )


    }
}

const mapStateToProps = (state) => {
    return {
        devs: state.developers,
        pays: state.countries,
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getDevelopers, getCountries }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubList)