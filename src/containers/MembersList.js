import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectMember } from '../actions'
import { bindActionCreators } from 'redux'
import MemberDetail from './MemberDetail'


class MembersList extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <ul className="col-4">
                    {
                        this.props.members.map((member) => {
                            return (
                                <li className="list-group-item" 
                                key={member.id}
                                onClick={ () => this.props.selectMember(member)}>
                                    {member.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <MemberDetail />    
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        members:state.members,
    }
}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({selectMember}, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MembersList)