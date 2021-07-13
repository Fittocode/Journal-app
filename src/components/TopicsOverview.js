// Step 1: Import React
import { render } from '@testing-library/react'
import React, { Component, useState } from 'react'
// style
import styled from 'styled-components'
// components
import AddTopic from './AddTopic'
import OverviewTopic from './OverviewTopic'

class TopicsOverview extends Component {

    render() {
        console.log(this.props.topicsList)
        let filteredTopics = this.props.topicsList.filter((topicItem) => {
            return topicItem.topicTitle.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
        })

        return (
            <div>
                <StyledFirstRow>
                    <StyledHeadline>Recent/All Topics</StyledHeadline>
                    <StyledHeadline><button onClick={this.props.addTopicToggle}>{(!this.props.addTopic) ? 'Add Topic' : 'Hide Add Topic'}</button></StyledHeadline>
                </StyledFirstRow>
                {(this.props.addTopic) ? <AddTopic clickToAdd={this.props.addTopicHandler} /> : null}
                {filteredTopics.map((topic, index) => {
                    return <OverviewTopic key={index} topicTitle={topic.topicTitle} topicWordCount={topic.topicWordCount} entries={topic.entries} />
                })}
            </div>
        )
    }
}

const StyledHeadline = styled.h2`
  color: black;
`

const StyledFirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    margin-right: 5%;
    margin-left: 20%;
`

export default TopicsOverview