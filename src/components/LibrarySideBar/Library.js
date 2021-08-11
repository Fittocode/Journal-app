import React from 'react'
// components
import LibraryTopic from './LibraryTopic'
// Router
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Library = ({ libraryStatus, topicsList, topicURL }) => {
    console.log(topicsList)
    return (
        <Router>
            <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
                <h2>Recent Entries</h2>
                <div className="library-songs">
                    {topicsList.map((topic, index) => {
                        return <Route path={`/${topicURL(topic.topicTitle)}`} key={index}>
                            <LibraryTopic key={index} topicTitle={topic.topicTitle} date={topic.entries[0].date} tags={topic.entries[0].tags} text={topic.entries[0].text} topicURL={topicURL} />
                        </Route>
                    })}
                </div>
            </div>
        </Router>
    )
}

export default Library