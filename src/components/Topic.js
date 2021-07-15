import React from 'react'
// style 
import styled from 'styled-components'
// components
import LoggedEntry from '../components/OverviewOfTopics/LoggedEntry'
import AddEntry from './AddEntry'

const Topic = ({ topicTitle, topicWordCount, entries }) => {

    console.log(topicTitle)
    console.log(typeof entries)

    return (
        <StyledTopic>
            <StyledFirstRow>
                <StyledTitle>{topicTitle} </StyledTitle>
                <span>{topicWordCount} words</span>
            </StyledFirstRow>
            <StyledLoggedEntry>
                {(entries.length > 1 && typeof entries === 'object') ?
                    entries.map((entry, index) => {
                        console.log('I am an object')
                        return <LoggedEntry key={index} date={entry.date} tags={entry.tags} wordCount={entry.wordCount} text={entry.text} />
                    }) : <LoggedEntry date={entries.date} tags={entries.tags} wordCount={entries.wordCount} text={entries.text} />}
            </StyledLoggedEntry>
            <AddEntry />
        </StyledTopic>
    )
}

const StyledTitle = styled.h1`
    color: #6b23e0;
`

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