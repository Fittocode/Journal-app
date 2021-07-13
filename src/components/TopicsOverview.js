// Step 1: Import React
import { render } from '@testing-library/react'
import React, { Component, useState } from 'react'
// style
import styled from 'styled-components'
// components
import AddTopic from './AddTopic'
import OverviewTopic from './OverviewTopic'

class TopicsOverview extends Component {

    filterByKeyword = (topic) => {
        for (let i = 0; i < topic.entries.length; i++) {
            console.log(topic.entries[i])
            for (let j = 0; j < topic.entries[i].tags.length; j++) {
                console.log(topic.entries[i].tags[j])

                if (topic.entries[i].tags[j] === this.props.search) {
                    return topic.entries[i].tags[j].indexOf(this.props.search) !== -1
                }
            }
        }
    }

    render() {
        let filteredTopics = this.props.topicsList.filter((topicItem) => {
            console.log(this.props.selectorValue)
            console.log(topicItem.entries)
            console.log(topicItem)
            // determine if searching by title or by keyword,
            return (this.props.selectorValue === 'title') ? topicItem.topicTitle.toLowerCase().indexOf(this.props.search) !== -1 : this.filterByKeyword(topicItem)
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

//  // if topic with multiple entries and tags
//  this.retrieveAllTags(topicItem).map((tag) => {
//     return tag.indexOf(this.props.search) !== -1
// })



// topicItem.entries.tags.toLowerCase().indexOf(this.props.search) !== -1

//     : (topicItem.entries.tags.length > 1 && typeof topicItem.entries.tags === Object) ? topicItem.entries.tags.join('').toLowerCase().indexOf(this.props.search) !== -1
//         // else if topic with one entry and one tag
//         : topicItem.entries.tags.toLowerCase().indexOf(this.props.search) !== -1