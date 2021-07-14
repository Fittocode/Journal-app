import React, { Component, useState } from 'react'
// components
import Navbar from './Navbar'
import Library from './LibrarySideBar/Library'
import TopicsOverview from './OverviewOfTopics/TopicsOverview'

class DynamicSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            selectorValue: 'title'
        }
    }

    handleSearchChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSelectorChange = (event) => {
        this.setState({
            selectorValue: event.target.value
        })
    }


    render() {
        return (
            <div>
                <Navbar handleSearchChange={this.handleSearchChange} search={this.state.search} selectorValue={this.state.selectorValue} handleSelectorChange={this.handleSelectorChange} />
                {/* <Library title={'Featured Topics'} /> */}
                <TopicsOverview topicsList={this.props.topicsList} addTopicToggle={this.props.addTopicToggle} addTopicHandler={this.props.addTopicHandler} addTopic={this.props.addTopic} search={this.state.search} selectorValue={this.state.selectorValue} />
            </div>
        )
    }
}

export default DynamicSearch
