// Step 1: Import React
import React, { Component } from 'react'
// components
import AddTopic from './AddTopic'
import OverviewTopic from './OverviewTopic'
import Topic from '../Topic'
// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class TopicsOverview extends Component {

    topicURL = (topicTitle) => {
        let topicURLFormat = topicTitle.split(' ').join('-')
        return (topicTitle.includes('?')) ? topicURLFormat.slice(0, topicTitle.length - 1) : topicURLFormat
    }

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
            } else if (topic.entries[i].tags.length = 1) {
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
            } else if (topic.entries[i].tags.length = 1) {
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
        console.log(this.props.selectorValue)

        let filteredTopics = this.props.topicsList.filter((topicItem) => {
            // determine if searching by title or by keyword,
            return (this.props.selectorValue === 'title') ? topicItem.topicTitle.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 : (this.props.selectorValue === 'content') ? this.filterByContent(topicItem) : this.filterByKeyword(topicItem)
        })

        return (
            <div>
                <Router>
                    <div className="to-first-row">
                        <h2 className="to-headline-color"><Link to={`/`} className="text-placeholder">View All Topics</Link></h2>
                        <h2 className="to-headline-color"><button onClick={this.props.addTopicToggle}>{(!this.props.addTopic) ? 'Add Topic' : 'Hide Add Topic'}</button></h2>
                    </div>
                    {(this.props.addTopic) ? <AddTopic clickToAdd={this.props.addTopicHandler} /> : null}
                    <Switch>
                        <Route path={'/'} exact>
                            {filteredTopics.map((topic, index) => {
                                return <OverviewTopic
                                    key={index}
                                    topicTitle={topic.topicTitle}
                                    calculateWordCount={this.calculateWordLength}
                                    entryWordCount={this.entryWordCount}
                                    entries={topic.entries}
                                    index={index}
                                    textIndexesOfSearch={this.textIndexesOfSearch(topic)}
                                    filteredIndex={(this.props.selectorValue === 'content') ? this.filterContentIndex(topic) : (this.props.selectorValue === 'keyword') ? this.filterKeywordIndex(topic) : topic.entries.length - 1}
                                    searchSelector={(this.props.selectorValue === 'content') ? 'content' : (this.props.selectorValue === 'keyword') ? 'keyword' : 'title'}
                                />
                            })}
                        </Route>
                        {this.props.topicsList.map((topic, index) => {
                            return <Route path={`/${this.topicURL(topic.topicTitle)}`} key={index} exact>
                                <Topic
                                    topic={topic}
                                    calculateWordCount={this.calculateWordLength}
                                    entryWordCount={this.entryWordCount}
                                    entries={topic.entries}
                                    addEntryHandler={this.props.addEntryHandler}
                                    textIndexesOfSearch={this.textIndexesOfSearch(topic)}
                                />
                            </Route>
                        })}
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default TopicsOverview

