import React, { useState } from 'react'
// components
import LoggedEntry from '../components/OverviewOfTopics/LoggedEntry'
import AddEntry from './AddEntry'
import NoResult from './OverviewOfTopics/NoResult'
// uuidv4()
import { v4 as uuidv4 } from 'uuid';

const Topic = ({ topic, calculateWordCount, entries, addEntryHandler, entryWordCount, textIndexesOfSearch, deleteTopic, topicsList }) => {

    console.log(entries)

    const [entryToggle, setEntryToggle] = useState(true)
    const [addEntries, setAddEntries] = useState(entries)
    const [rerenderEntries, setRerenderEntries] = useState(false)

    // show/hide add entry form
    const addEntryToggle = () => {
        setEntryToggle(!entryToggle)
    }
    console.log(entries.length)

    // // show/hide edit delete entry buttons
    // const entryOptionsToggle = () => {
    //     setToggleOptions(!toggleOptions)
    // }

    const deleteEntry = (topic, index) => {
        const entriesCopy = topic.entries
        console.log(entriesCopy)
        entriesCopy.splice(index, 1)
        setRerenderEntries(!rerenderEntries)
        setAddEntries(entriesCopy)
    }

    return (
        <div>
            <div className="first-row topics">
                <h1 className="topic-title">{topic.topicTitle} </h1>
                <span>{calculateWordCount(entries, 0)} total words</span>
            </div>
            <div className="entry-margins">
                {(addEntries.length === 0) ? <NoResult /> : addEntries.map((entry, index) => {
                    return <div className="hover-entry" > {
                        <LoggedEntry
                            key={uuidv4()}
                            id={index}
                            wordCount={entryWordCount(entry.text)}
                            textIndexesOfSearch={textIndexesOfSearch}
                            deleteEntry={deleteEntry}
                            deleteTopic={deleteTopic}
                            topicsList={topicsList}
                            topic={topic}
                            entries={addEntries}
                            entry={entry}
                            date={entry.date}
                            text={entry.text}
                            tags={entry.tags}
                        />}
                        <div style={{ borderBottom: 'solid 1px #ebebeb' }} />
                    </div>
                })}
            </div>
            <div className="topics" style={{ paddingBottom: '1rem' }}>
                <button className="entry-button" onClick={addEntryToggle}>{(!entryToggle) ? 'Add Entry' : 'Hide Add Entry'}</button>
            </div>
            {(entryToggle) ? <div className="add-entry-box topics"><AddEntry topic={topic} addEntryHandler={addEntryHandler} addEntryToggle={addEntryToggle} /> </div> : null}
        </div >
    )
}

export default Topic