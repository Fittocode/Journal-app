import React from 'react'
import { useLocation } from 'react-router-dom'

const LoggedEntry = ({ date, tags, text, wordCount, textIndexesOfSearch, searchSelector }) => {

    let textStartIndex = 0
    let textEndIndex = 0

    if (searchSelector === 'content') {
        textStartIndex = textIndexesOfSearch[0]
        textEndIndex = textIndexesOfSearch[1]
    }

    const location = useLocation()
    console.log(location.pathname)

    return (
        <div className="entry">
            <div className="first-row">
                <span>{date}</span>
                <span>{(text === '') ? 7 : wordCount} {(wordCount === 1) ? `word` : `words`}</span>
            </div>
            <br />
            <div className="tag-color">{(tags.length > 1 && typeof tags === 'object') ? tags.map(tag => {
                return `#${tag} `
            }) : `#${tags}`}</div>
            <br />
            {(location.pathname === '/' && searchSelector === 'content') ? <p>{text.slice(0, textStartIndex)}<span className="highlightedText">{text.slice(textStartIndex, textEndIndex)}</span>{text.slice(textEndIndex, text.length)}</p> : <p>{text}</p>}
            <br />
        </div >
    )
}



export default LoggedEntry