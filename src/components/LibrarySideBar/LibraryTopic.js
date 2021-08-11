import React from 'react'
import { Link } from 'react-router-dom'

const LibraryTopic = ({ topicTitle, date, tags, text, topicURL }) => {

    console.log(topicTitle)
    return (
        <div className="library-song" id="library-topics">
            <div>
                <h3 className="topic-title">{topicTitle}</h3>
            </div>
            <p>{date}</p>
            <div className="tags">{(tags.length > 1 && typeof tags === 'object') ? tags.map(tag => {
                return `#${tag} `
            }) : `#${tags}`}</div>
            <p>{text}</p>
        </div>
    )
}


export default LibraryTopic