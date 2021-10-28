import React from 'react'
// components
import LibraryTopic from './LibraryTopic'

const Library = ({ libraryStatus, topicsList, topicURL }) => {
    console.log(topicsList)
    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Recent Entries</h2>
            <div className="library-songs">
                {topicsList.map((topic, index) => {
                    return <LibraryTopic key={index} topicTitle={topic.topicTitle} date={topic.entries[0].date} tags={topic.entries[0].tags} text={topic.entries[0].text} topicURL={topicURL} />
                }).reverse()}
            </div>
        </div>

    )
}

export default Library