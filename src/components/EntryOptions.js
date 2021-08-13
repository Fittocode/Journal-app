import React from 'react'

function EntryOptions({ deleteEntry, deleteTopic, entries, index, entry, topicsList, topic }) {
    console.log(index)
    console.log(entries)
    return (
        <div className='entry-options'>
            <button className="e2-button e-opt-buttons">Edit Entry</button>
            <button className="e-button e-opt-buttons" onClick={() => deleteEntry(deleteTopic, topicsList, topic, entries, entry)}>Delete</button>
        </div>
    )
}

export default EntryOptions
