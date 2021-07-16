// Step 1: Import React
import React, { Component } from 'react'
// style
import styled from 'styled-components'
// components
import AddTopic from './AddTopic'
import OverviewTopic from './OverviewTopic'
import Topic from '../Topic'
// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class TopicsOverview extends Component {

    topicURL = (topicTitle) => {
        return (topicTitle.includes('?')) ? topicTitle.split(' ').join('-').slice(0, topicTitle.length - 1) : topicTitle.split(' ').join('-')
    }

    calculateWordLength = (entries) => {
        let wordLength = 0
        if (entries.length > 1 && typeof entries === 'object') {
            entries.map((entry) => {
                return wordLength += entry.text.split(' ').length
            })
            return wordLength
        } else {
            return entries[0].text.split(' ').length
        }
    }

    entryWordCount = (text) => {
        return text.split(' ').length
    }

    filterByKeyword = (topic) => {
        let searchInput = this.props.search.toLowerCase()

        for (let i = 0; i < topic.entries.length; i++) {
            if (topic.entries[i].tags.length > 1 && typeof topic.entries[i].tags === 'object') {
                for (let j = 0; j < topic.entries[i].tags.length; j++) {
                    let topicEntryTags = topic.entries[i].tags[j].toLowerCase()
                    if (topicEntryTags.includes(searchInput)) {
                        return topicEntryTags.indexOf(searchInput) !== -1
                    }
                }
            } else {
                let topicEntryTags = topic.entries[i].tags.toLowerCase()
                console.log(topicEntryTags)
                if (topicEntryTags.includes(searchInput)) {
                    return topicEntryTags.indexOf(searchInput) !== -1
                }
            }
        }
    }

    filterByContent = (topic) => {
        let searchInput = this.props.search.toLowerCase()

        for (let i = 0; i < topic.entries.length; i++) {
            let topicText = topic.entries[i].text.toLowerCase()
            if (topicText.includes(searchInput)) {
                return topicText.indexOf(searchInput) !== -1
            }
        }
    }

    filterContentIndex = (topic) => {
        let searchInput = this.props.search.toLowerCase()

        for (let i = 0; i < topic.entries.length; i++) {
            let topicText = topic.entries[i].text.toLowerCase()
            if (topicText.includes(searchInput)) {
                return i
            }
        }
    }

    filterKeywordIndex = (topic) => {
        let searchInput = this.props.search.toLowerCase()

        for (let i = 0; i < topic.entries.length; i++) {
            if (topic.entries[i].tags.length > 1 && typeof topic.entries[i].tags === 'object') {
                for (let j = 0; j < topic.entries[i].tags.length; j++) {
                    let topicEntryTags = topic.entries[i].tags[j].toLowerCase()
                    if (topicEntryTags.includes(searchInput)) {
                        return i
                    }
                }
            } else {
                let topicEntryTags = topic.entries[i].tags.toLowerCase()
                if (topicEntryTags.includes(searchInput)) {
                    return i
                }
            }
        }
    }

    render() {


        let filteredTopics = this.props.topicsList.filter((topicItem) => {
            // determine if searching by title or by keyword,
            return (this.props.selectorValue === 'title') ? topicItem.topicTitle.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 : (this.props.selectorValue === 'content') ? this.filterByContent(topicItem) : this.filterByKeyword(topicItem)
        })

        return (
            <div>
                <StyledFirstRow>
                    <StyledHeadline>Recent/All Topics</StyledHeadline>
                    <StyledHeadline><button onClick={this.props.addTopicToggle}>{(!this.props.addTopic) ? 'Add Topic' : 'Hide Add Topic'}</button></StyledHeadline>
                </StyledFirstRow>
                {(this.props.addTopic) ? <AddTopic clickToAdd={this.props.addTopicHandler} /> : null}
                <Router>
                    <Switch>
                        <Route path={'/'} exact>
                            {filteredTopics.map((topic, index) => {
                                return <OverviewTopic key={index} topicTitle={topic.topicTitle} calculateWordCount={this.calculateWordLength} entryWordCount={this.entryWordCount} entries={topic.entries} index={index} filteredIndex={(this.props.selectorValue === 'content') ? this.filterContentIndex(topic) : (this.props.selectorValue === 'keyword') ? this.filterKeywordIndex(topic) : topic.entries.length - 1} />
                            })}
                        </Route>
                        {this.props.topicsList.map((topic, index) => {
                            return <Route path={`/${this.topicURL(topic.topicTitle)}`} key={index} exact>
                                <Topic topic={topic} calculateWordCount={this.calculateWordLength} entryWordCount={this.entryWordCount} entries={topic.entries} addEntryHandler={this.props.addEntryHandler} />
                            </Route>
                        })}
                    </Switch>
                </Router>
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
    margin-right: 20%;
    margin-left: 20%;
`

export default TopicsOverview

