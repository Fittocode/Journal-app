import React from 'react'
// style 
import styled from 'styled-components'
// components
import LoggedEntry from './LoggedEntry'

const OverviewTopic = ({ topicTitle, topicWordCount, entries }) => {

    let featuredEntry = entries

    if (entries.length > 1) featuredEntry = entries[entries.length - 1]

    const entryWordCount = (text) => {
        return text.split(' ')
    }

    console.log(typeof featuredEntry.date)

    return (
        <StyledTopic>
            <StyledFirstRow>
                <h2>{topicTitle} </h2>
                <span>Entries: {(entries[entries.length - 1]) ? entries.length : 1}</span>
                {/* <span>Created: {entries[0].date}</span> */}
                <span>{entryWordCount(featuredEntry.text).length} total words</span>
            </StyledFirstRow>
            <StyledLoggedEntry>
                <LoggedEntry date={featuredEntry.date} tags={featuredEntry.tags} text={featuredEntry.text} wordCount={entryWordCount(featuredEntry.text).length} />
            </StyledLoggedEntry>
        </StyledTopic>
    )
}

// entryWordCount={featuredEntry.wordCount}

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