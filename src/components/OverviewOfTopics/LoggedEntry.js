import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import EntryOptions from '../EntryOptions'

const LoggedEntry = ({ date, tags, text, wordCount, textIndexesOfSearch, searchSelector }) => {

    let textStartIndex = 0
    let textEndIndex = 0

    if (searchSelector === 'content') {
        textStartIndex = textIndexesOfSearch[0]
        textEndIndex = textIndexesOfSearch[1]
    }

    const [toggleOptions, setToggleOptions] = useState(false)

    const addEntryOptions = () => {
        setToggleOptions(!toggleOptions)
    }

    const location = useLocation()
    console.log(location.pathname)

    return (
        <div onClick={addEntryOptions}>
            <div className="entry" style={{ padding: '1rem' }} id={(toggleOptions) ? 'overlay' : ''}>
                {(toggleOptions) ? <div className='entry-options'>
                    <button className="e2-button e-opt-buttons">Edit Entry</button>
                    <button className="e-button e-opt-buttons">Delete</button>
                </div> : null}
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