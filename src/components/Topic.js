import React, { useState } from 'react'
// components
import LoggedEntry from '../components/OverviewOfTopics/LoggedEntry'
import AddEntry from './AddEntry'

const Topic = ({ topic, calculateWordCount, entries, addEntryHandler, entryWordCount, textIndexesOfSearch }) => {

    console.log(entries)

    const [addEntry, setAddEntry] = useState(true)

    // show/hide add topics form
    const addEntryToggle = () => {
        setAddEntry(!addEntry)
    }

    return (
        <div className="topics">
            <div className="first-row">
                <h1 className="topic-title">{topic.topicTitle} </h1>
                <span>{calculateWordCount(entries, 0)} total words</span>
            </div>
            <div className="logged-entry">
                {entries.map((entry, index) => {
                    return <LoggedEntry key={index} date={entry.date} tags={entry.tags} wordCount={entryWordCount(entry.text)} text={entry.text} textIndexesOfSearch={textIndexesOfSearch} />
                })}
            </div>
            <div>
                <button className="to-button topic-button" onClick={addEntryToggle}>{(!addEntry) ? 'Add Entry' : 'Hide Add Entry'}</button>
            </div>
            {(addEntry) ? <div className="add-entry-box"><AddEntry topic={topic} addEntryHandler={addEntryHandler} addEntryToggle={addEntryToggle} /> </div> : null}
        </div>
    )
}

export default Topic