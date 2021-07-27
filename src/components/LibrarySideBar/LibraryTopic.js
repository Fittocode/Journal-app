import React from 'react'
// style 
import styled from 'styled-components'

const LibraryTopic = ({ topicTitle, wordCount, date, tags, text }) => {

    console.log(topicTitle)
    return (
        <div className="library-song">
            <div>
                <h3 className="topic-title">{topicTitle}</h3>
            </div>
            <p>{date}</p>
            <hr></hr>
            <div className="tags">{tags}</div>
            <p>{text}</p>
        </div>
    )
}

const StyledLine = styled.hr`
    width: 100%;
`
const StyledLibraryTopic = styled.div`
    margin: .5rem .5rem .5rem;
    padding: 1rem 1rem 1rem;
    width: 17rem;
    background-color: white;
    border-radius: .5rem;
`

const StyledFirstLine = styled.div`
    display: flex;
    justify-content: space-between;
    height: 2.5rem;
`
const StyledTags = styled.p`
    color: #1EA48C;
`

export default LibraryTopic