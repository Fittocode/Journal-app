import React from 'react'
// style 
import styled from 'styled-components'
// components
import LoggedEntry from './LoggedEntry'
// Router
import { Link } from 'react-router-dom'

const OverviewTopic = ({ topicTitle, entries, calculateWordCount, entryWordCount, index, filteredIndex }) => {

    let featuredEntry = entries[filteredIndex]

    const topicURL = (topicTitle) => {
        return (topicTitle.includes('?')) ? topicTitle.split(' ').join('-').slice(0, topicTitle.length - 1) : topicTitle.split(' ').join('-')
    }

    return (
        <StyledTopic>
            <StyledRow>
                <StyledTitle>
                    <Link to={`/${topicURL(topicTitle)}`} className="text-placeholder"><h2>{topicTitle}</h2></Link>
                </StyledTitle>
                <StyledEntry>Entries: {(entries[entries.length - 1]) ? entries.length : 1}</StyledEntry>
                {/* <span>Created: {entries[0].date}</span> */}
                <span>{(calculateWordCount(entries, index) === 1) ? `1 word` : `${calculateWordCount(entries, index)} total words`}</span>
            </StyledRow>
            <StyledLoggedEntry>
                <LoggedEntry date={featuredEntry.date} tags={featuredEntry.tags} text={featuredEntry.text} wordCount={entryWordCount(featuredEntry.text)} />
            </StyledLoggedEntry>
        </StyledTopic >
    )
}

const StyledTopic = styled.div`
    padding-top: 1rem;
    margin-right: 20%;
    margin-left: 20%;
`

const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const StyledTitle = styled.div`
    padding-top: 1rem;
    display: flex;
    align-items: flex-end;
`

const StyledEntry = styled.div`
    padding-left: 1rem;
    display: flex;
    align-items: flex-end;
`

const StyledLoggedEntry = styled.div`
   padding-top: 1rem;  
`

export default OverviewTopic