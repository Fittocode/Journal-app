import React from 'react'
// style 
import styled from 'styled-components'
import topics from '../topics.json'
// components
import LoggedEntry from './LoggedEntry'
import AddEntry from './AddEntry'

const Topic = ({ topicTitle, topicWordCount, entries }) => {

    // const entries = topics.entries
    console.log(topics[0].entries)

    return (
        <StyledTopic>
            <StyledFirstRow>
                <h1>{topicTitle} </h1>
                <span>{topicWordCount} words</span>
            </StyledFirstRow>
            <StyledLoggedEntry>
                {entries.map(entry => {
                    return <LoggedEntry date={entry.date} tags={entry.tags} entryWordCount={entry.wordCount} text={entry.text} />
                })}
            </StyledLoggedEntry>
            <AddEntry />
        </StyledTopic>
    )
}

const StyledTopic = styled.div`
    padding-top: 1rem;
    margin-right: 5%;
    margin-left: 20%;

`

const StyledFirstRow = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLoggedEntry = styled.div`
   padding-top: 1rem;  
`

export default Topic