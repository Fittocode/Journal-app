import React from 'react'
// style 
import styled from 'styled-components'
// components
import LoggedEntry from './LoggedEntry'
// Router
import { Link } from 'react-router-dom'

const OverviewTopic = ({ topicTitle, entries }) => {

    let featuredEntry = entries

    const topicURL = (topicTitle) => {
        return topicTitle.split(' ').join('-')
    }

    if (entries.length > 1) featuredEntry = entries[entries.length - 1]

    const calculateWordLength = (entries) => {
        let wordLength = 0
        console.log(entries)
        if (entries.length > 1) {
            entries.map((entry) => {
                return wordLength += entry.text.split(' ').length
            })
            return wordLength
        } else {
            if (entries.text.split(' ').length === 1) {
                return 1
            } else {
                return entries.text.split(' ').length
            }
        }
    }

    const entryWordCount = (text) => {
        return text.split(' ')
    }

    return (
        <StyledTopic>
            <StyledRow>
                <StyledTitle>
                    <Link to={`/${topicURL(topicTitle)}`} className="text-placeholder"><h2>{topicTitle}</h2></Link>
                </StyledTitle>
                <StyledEntry>Entries: {(entries[entries.length - 1]) ? entries.length : 1}</StyledEntry>
                {/* <span>Created: {entries[0].date}</span> */}
                <span>{(calculateWordLength(entries) === 1) ? `1 word` : `${calculateWordLength(entries)} total words`}</span>
            </StyledRow>
            <StyledLoggedEntry>
                <LoggedEntry date={featuredEntry.date} tags={featuredEntry.tags} text={featuredEntry.text} wordCount={entryWordCount(featuredEntry.text).length} />
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