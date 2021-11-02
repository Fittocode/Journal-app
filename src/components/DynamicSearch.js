import React, { Component } from 'react'
// components
import Navbar from './Navbar'
import Library from './LibrarySideBar/Library'
import TopicsOverview from './OverviewOfTopics/TopicsOverview'

class DynamicSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            selectorValue: 'title',
            libraryStatus: false
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

    libraryToggle = () => {
        this.setState({
            libraryStatus: !this.state.libraryStatus
        })
        console.log(this.state.libraryStatus)
    }

    topicURL = (topicTitle) => {
        let topicURLFormat = topicTitle.split(' ').join('-')
        return (topicTitle.includes('?')) ? topicURLFormat.slice(0, topicTitle.length - 1) : topicURLFormat
    }

    render() {
        return (
            <div className="background-home">
                <Navbar
                    handleSearchChange={this.handleSearchChange}
                    search={this.state.search}
                    selectorValue={this.state.selectorValue}
                    handleSelectorChange={this.handleSelectorChange}
                />
                {/* <Library
                    libraryStatus={this.state.libraryStatus}
                    topicsList={this.props.topicsList}
                    topicURL={this.topicURL}
                    libraryToggle={this.libraryToggle}
                /> */}
                <TopicsOverview
                    topicsList={this.props.topicsList}
                    addTopicToggle={this.props.addTopicToggle}
                    addTopicHandler={this.props.addTopicHandler}
                    addEntryHandler={this.props.addEntryHandler}
                    addTopic={this.props.addTopic}
                    search={this.state.search}
                    selectorValue={this.state.selectorValue}
                    libraryToggle={this.libraryToggle}
                    topicURL={this.topicURL}
                    deleteEntry={this.props.deleteEntry}
                    deleteTopic={this.props.deleteTopic}
                />
            </div>
        )
    }
}

export default DynamicSearch
