import React, { useState } from 'react'
// components
import LoggedEntry from '../components/OverviewOfTopics/LoggedEntry'
import AddEntry from './AddEntry'
// uuidv4()
import { v4 as uuidv4 } from 'uuid';

const Topic = ({ topic, calculateWordCount, entries, addEntryHandler, entryWordCount, textIndexesOfSearch, deleteEntry }) => {

    console.log(entries)

    const [addEntry, setAddEntry] = useState(true)

    // show/hide add topics form
    const addEntryToggle = () => {
        setAddEntry(!addEntry)
    }

    return (
        <div>
            <div className="first-row topics">
                <h1 className="topic-title">{topic.topicTitle} </h1>
                <span>{calculateWordCount(entries, 0)} total words</span>
            </div>
            <div className="entry-margins">
                {entries.map((entry) => {
                    return <div className="hover-entry"> {
                        <LoggedEntry key={uuidv4()} id={uuidv4()} date={entry.date} tags={entry.tags} wordCount={entryWordCount(entry.text)} text={entry.text} textIndexesOfSearch={textIndexesOfSearch} deleteEntry={deleteEntry} entries={entries} entry={entry} />}
                        <div style={{ borderBottom: 'solid 1px #ebebeb' }} />
                    </div>
                })}
            </div>
            <div className="topics" style={{ paddingBottom: '1rem' }}>
                <button className="entry-button" onClick={addEntryToggle}>{(!addEntry) ? 'Add Entry' : 'Hide Add Entry'}</button>
            </div>
            {(addEntry) ? <div className="add-entry-box topics"><AddEntry topic={topic} addEntryHandler={addEntryHandler} addEntryToggle={addEntryToggle} /> </div> : null}
        </div >
    )
}

export default Topic