import React from 'react'

function EntryOptions({ deleteEntry, deleteTopic, entries, id, entry, topicsList, topic }) {

    console.log(entries)
    return (
        <div className='entry-options'>
            <button className="e2-button e-opt-buttons">Edit Entry</button>
            <button className="e-button e-opt-buttons" onClick={() => deleteEntry(topic, id)}>Delete</button>
        </div>
    )
}

export default EntryOptions
