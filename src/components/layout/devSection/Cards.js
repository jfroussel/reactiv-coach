import React, { Component } from 'react';
import './Card.css'
import { connect } from 'react-redux'
import { getAllGithub } from '../../../actions'
import { bindActionCreators } from 'redux'

class Cards extends Component {
    
    componentWillMount() {
        this.props.getAllGithub()
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props)
    }
    

    
    cardList() {
        const { developers } = this.props
    
        if (developers) {
            return (
                developers.map((user) => (
                    <div className="content pb-3 pl-5" key={user.id}>
                        <div className="card" >
                            <div className="firstinfo"><img src={user.avatar_url} alt="" />
                                <div className="profileinfo">
                                    <h1>{user.login}</h1>
                                    <h3>{user.id}</h3>
                                    <h3>React / Redux Developer</h3>
                                    <p className="bio">JSON</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            );
        } else {
            return <div>no github user found...</div>
        }
    }
    


    render() {
        return (
            this.cardList()
        )
    }
}

const mapStateToProps = (state) => {
    return {
        developers: state.getAllGithub,
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAllGithub }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
