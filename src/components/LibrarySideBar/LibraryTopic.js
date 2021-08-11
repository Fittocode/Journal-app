import React from 'react'
import { Link } from 'react-router-dom'

const LibraryTopic = ({ topicTitle, date, tags, text, topicURL }) => {

    console.log(topicTitle)
    return (
        <div className="library-song">
            <div>
                <Link to={`/${topicURL(topicTitle)}`} className="text-placeholder">
                    <h3 className="topic-title">{topicTitle}</h3>
                </Link>
            </div>
            <p>{date}</p>
            <hr></hr>
            <div className="tags">{tags}</div>
            <p>{text}</p>
        </div>
    )
}


export default LibraryTopic