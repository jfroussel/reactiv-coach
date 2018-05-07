import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllGithub, githubSelected } from '../actions'
import { bindActionCreators } from 'redux'
import UserGithub from './GithubDetail'


class GithubList extends Component {


    componentWillMount() {
        this.props.getAllGithub()
    }

    githubList() {
        const { githubs } = this.props
        if (githubs) {
            return (
                <div>
                    <ul className="col-4">
                        {
                            githubs.map((user) => (
                                <li className="list-group-item"
                                    key={user.id}
                                    onClick={() => this.props.githubSelected(user)}>
                                    <img src={user.avatar_url} alt={user.login} width="50px" className="rounded-circle" />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            );
        } else {
            return <div>no github user found...</div>
        }
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-6">{this.githubList()}</div>
                <div className="col-md-6"> <UserGithub />   </div>
            </div>
        )


    }
}

const mapStateToProps = (state) => {
    return {
        githubs: state.githubs,
    }
}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ getAllGithub, githubSelected }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(GithubList)