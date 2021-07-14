// Step 1: Import React
import React, { Component } from 'react'
// style
import styled from 'styled-components'
// components
import AddTopic from './AddTopic'
import OverviewTopic from './OverviewTopic'

class TopicsOverview extends Component {

    filterByKeyword = (topic) => {
        let searchInput = this.props.search.toLowerCase()
        if (topic.entries.length >= 1) {
            for (let i = 0; i < topic.entries.length; i++) {
                for (let j = 0; j < topic.entries[i].tags.length; j++) {
                    let topicEntryTags = topic.entries[i].tags[j].toLowerCase()
                    if (topicEntryTags.includes(searchInput)) {
                        return topicEntryTags.indexOf(searchInput) !== -1
                    }
                }
            }
        } else {
            for (let i = 0; i < topic.entries.tags.length; i++) {
                let topicTags = topic.entries.tags[i].toLowerCase()
                if (topicTags.includes(searchInput)) {
                    return topicTags.indexOf(searchInput) !== -1
                }
            }
        }
    }

    filterByContent = (topic) => {
        let searchInput = this.props.search.toLowerCase()
        if (topic.entries.length >= 1) {
            for (let i = 0; i < topic.entries.length; i++) {
                let topicText = topic.entries[i].text.toLowerCase()
                if (topicText.includes(searchInput)) {
                    return topicText.toLowerCase().indexOf(searchInput) !== -1
                }
            }
        } else {
            let topicEntryText = topic.entries.text.toLowerCase()
            if (topicEntryText.includes(searchInput)) {
                return topicEntryText.indexOf(searchInput) !== -1
            }
        }
    }

    render() {
        let filteredTopics = this.props.topicsList.filter((topicItem) => {
            // determine if searching by title or by keyword,
            console.log(topicItem)
            return (this.props.selectorValue === 'title') ? topicItem.topicTitle.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 : (this.props.selectorValue === 'content') ? this.filterByContent(topicItem) : this.filterByKeyword(topicItem)
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