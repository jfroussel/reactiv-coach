import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDevelopers } from '../actions'
import { bindActionCreators } from 'redux'
import SearchDevelopers from '../components/layout/devSection/SearchDevelopers'

class DevelopersList extends Component {

    componentWillMount() {
        this.props.getDevelopers()
        console.log('component will mount : ',this.props)
    }
    componentDidMount() {
        console.log('component did mount : ',this.props)
    }
    componentWillReceiveProps() {
        console.log('component will receive props : ',this.props)
    }
    componentWillUpdate() {
        console.log('component will update : ',this.props)
    }
    componentDidUpdate() {
        console.log('component did update : ',this.props)
    }
    
    

    developersList() {
        const { devs } = this.props
        if (devs) {
            return (
                <div>
                    {
                        devs.map((dev) => {
                            return (
                                <span key={dev.login} className="pr-2 pb-2"><img src={dev.avatar_url} alt={dev.login} width="80px" className="rounded-circle" /></span>
                            )
                        }) 
                    }
                </div>
            )
        } else {
            return <div>no github developers found...</div>
        }
    }

    render() {
        return (
            <div className="container">
                <SearchDevelopers />
                {this.developersList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        devs: state.developers,
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ getDevelopers }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(DevelopersList)