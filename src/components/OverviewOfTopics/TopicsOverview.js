import React, { Component } from 'react'
// components
import AddTopic from './AddTopic'
import OverviewTopic from './OverviewTopic'
import Topic from '../Topic'
import NoResult from '../OverviewOfTopics/NoResult'
// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// uuidv4()
import { v4 as uuidv4 } from 'uuid';

class TopicsOverview extends Component {

    calculateWordLength = (entries) => {
        let wordLength = 0
        if (entries.length > 1) {
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
            if (topic.entries[i].tags.length > 1) {
                for (let j = 0; j < topic.entries[i].tags.length; j++) {
                    let topicEntryTags = topic.entries[i].tags[j].toLowerCase()
                    if (topicEntryTags.includes(searchInput)) {
                        return topicEntryTags.indexOf(searchInput) !== -1
                    }
                }
            } else if (topic.entries[i].tags.length === 1) {
                let topicEntryTags = topic.entries[i].tags.toLowerCase()
                console.log(topicEntryTags.length)
                if (topicEntryTags.includes(searchInput)) {
                    return topicEntryTags.indexOf(searchInput) !== -1
                }
            } else {

            }
        }
    }

    filterByContent = (topic) => {
        let searchInput = this.props.search.toLowerCase()

        for (let i = 0; i < topic.entries.length; i++) {
            let topicText = topic.entries[i].text.toLowerCase()
            if (topicText.includes(searchInput)) {
                console.log(topicText.indexOf(searchInput))
                return topicText.indexOf(searchInput) !== -1
            }
        }
    }

    textIndexesOfSearch = (topic) => {
        let searchInput = this.props.search.toLowerCase()

        for (let i = 0; i < topic.entries.length; i++) {
            let topicText = topic.entries[i].text.toLowerCase()
            if (topicText.includes(searchInput)) {
                console.log([topicText.indexOf(searchInput), topicText.indexOf(searchInput) + searchInput.length])
                return [topicText.indexOf(searchInput), topicText.indexOf(searchInput) + searchInput.length]
            }
        }
    }

    keywordIndexesOfSearch = (topic) => {
        let searchInput = this.props.search.toLowerCase()

        for (let i = 0; i < topic.entries.length; i++) {
            if (topic.entries[i].tags.length > 1) {
                for (let j = 0; j < topic.entries[i].tags.length; j++) {
                    let topicEntryTags = topic.entries[i].tags[j].toLowerCase()
                    if (topicEntryTags.includes(searchInput)) {
                        return [topicEntryTags.indexOf(searchInput), topicEntryTags.indexOf(searchInput) + searchInput.length]
                    }
                }
            } else if (topic.entries[i].tags.length === 1) {
                let topicEntryTags = topic.entries[i].tags.toLowerCase()
                if (topicEntryTags.includes(searchInput)) {
                    return [topicEntryTags.indexOf(searchInput), topicEntryTags.indexOf(searchInput) + searchInput.length]
                }
            } else {

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
            if (topic.entries[i].tags.length > 1) {
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
            <Router>
                <div className="to-first-row">
                    {/* <button className="to-button" onClick={this.props.libraryToggle}>Recent Entries</button> */}
                    <h2><Link to={`/`} className="text-placeholder" style={{ color: 'white' }}>View All Topics</Link></h2>
                    <button className="to-button" onClick={this.props.addTopicToggle}>{(!this.props.addTopic) ? 'Add Topic' : 'Hide Add Topic'}</button>
                </div>
                {(this.props.addTopic) ? <AddTopic clickToAdd={this.props.addTopicHandler} /> : null}
                <Switch>
                    <Route path={'/'} exact>
                        {(filteredTopics.length >= 1) ? filteredTopics.map((topic) => {
                            return <OverviewTopic
                                key={uuidv4()}
                                topicTitle={topic.topicTitle}
                                calculateWordCount={this.calculateWordLength}
                                entryWordCount={this.entryWordCount}
                                entries={topic.entries}
                                textIndexesOfSearch={this.textIndexesOfSearch(topic)}
                                filteredIndex={(this.props.selectorValue === 'content') ? this.filterContentIndex(topic) : (this.props.selectorValue === 'keyword') ? this.filterKeywordIndex(topic) : topic.entries.length - 1}
                                searchSelector={(this.props.selectorValue === 'content') ? 'content' : (this.props.selectorValue === 'keyword') ? 'keyword' : 'title'}
                            />
                        }) : <NoResult />}
                    </Route>
                    {(this.props.topicsList.length === 0) ? <NoResult /> :
                        this.props.topicsList.map((topic) => {
                            return <Route path={`/${this.props.topicURL(topic.topicTitle)}`} exact>
                                <Topic
                                    key={uuidv4()}
                                    topic={topic}
                                    calculateWordCount={this.calculateWordLength}
                                    entryWordCount={this.entryWordCount}
                                    entries={topic.entries}
                                    addEntryHandler={this.props.addEntryHandler}
                                    textIndexesOfSearch={this.textIndexesOfSearch(topic)}
                                    deleteEntry={this.props.deleteEntry}
                                    deleteTopic={this.props.deleteTopic}
                                    topicsList={this.props.topicsList}
                                />
                            </Route>
                        })}
                </Switch>
            </Router>
        )
    }
}

export default TopicsOverview

