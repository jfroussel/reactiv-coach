import React, { Component } from 'react';
import { connect } from 'react-redux'

class MemberDetail extends Component {
    render() {
        const { memberDetail} = this.props
        if(!memberDetail) {
            return <div>Select a member ...</div>
        }
        return (
            <div>
                <h3>{memberDetail.name}</h3>
                <h3>{memberDetail.id}</h3>
                <h3>{memberDetail.active}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        memberDetail: state.activeMember
    }
}
export default connect(mapStateToProps) (MemberDetail);