import React from 'react'
// style 
import styled from 'styled-components'
// components
import LoggedEntry from './LoggedEntry'

const OverviewTopic = ({ topicTitle, topicWordCount, entries }) => {

    const featuredEntry = entries[entries.length - 1]

    return (
        <StyledTopic>
            <StyledFirstRow>
                <h2>{topicTitle} </h2>
                <span>Entries: {entries.length}</span>
                <span>Created: {entries[0].date}</span>
                <span>{topicWordCount} total words</span>
            </StyledFirstRow>
            <StyledLoggedEntry>
                <LoggedEntry date={featuredEntry.date} tags={featuredEntry.tags} entryWordCount={featuredEntry.wordCount} text={featuredEntry.text} />
            </StyledLoggedEntry>
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

export default OverviewTopic