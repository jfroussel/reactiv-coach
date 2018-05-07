import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserGithub extends Component {
    render() {
        const { userGithub } = this.props
        if(!userGithub) {
            return <div>Select a github member ...</div>
        }
        return (
            <div>
                <h3>{userGithub.id}</h3>
                <h3>{userGithub.login}</h3>
                <h3>{userGithub.email}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userGithub: state.userGithub
    }
}
export default connect(mapStateToProps) (UserGithub);