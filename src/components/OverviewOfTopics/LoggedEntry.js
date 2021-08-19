import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import EntryOptions from '../EntryOptions'

const LoggedEntry = ({ wordCount, topic, textIndexesOfSearch, searchSelector, deleteEntry, deleteTopic, topicsList, entries, entry, id, date, text, tags }) => {

    const [toggleOptions, setToggleOptions] = useState(false)

    let textStartIndex, textEndIndex = 0

    if (searchSelector === 'content') {
        textStartIndex = textIndexesOfSearch[0]
        textEndIndex = textIndexesOfSearch[1]
    }

    const location = useLocation()

    return (
        <div onClick={() => setToggleOptions(!toggleOptions)} className="entry-frame">
            <div className="entry" style={{ padding: '1rem' }} id={(toggleOptions) ? 'overlay' : ''}>
                {(toggleOptions) ? <EntryOptions
                    deleteEntry={deleteEntry}
                    deleteTopic={deleteTopic}
                    topicsList={topicsList}
                    entries={entries}
                    topic={topic}
                    id={id}
                    entry={entry}
                /> : null}
                <div className="first-row">
                    <span>{date}</span>
                    <span>{(text === '') ? 7 : wordCount} {(wordCount === 1) ? `word` : `words`}</span>
                </div>
                <div className="tag-color">{(tags.length > 1 && typeof tags === 'object') ? tags.map(tag => {
                    return `#${tag} `
                }) : `#${tags}`}</div>
                <br />
                {(location.pathname === '/' && searchSelector === 'content') ? <p>{text.slice(0, textStartIndex)}<span className="highlightedText">{text.slice(textStartIndex, textEndIndex)}</span>{text.slice(textEndIndex, text.length)}</p> : <p>{text}</p>}
            </div >
        </div>
    )
}



export default LoggedEntry