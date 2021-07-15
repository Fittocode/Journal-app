import React, { useState } from 'react'
// style 
import styled from 'styled-components'
// components
import LoggedEntry from '../components/OverviewOfTopics/LoggedEntry'
import AddEntry from './AddEntry'

const Topic = ({ topic, calculateWordCount, entries, addEntryHandler }) => {

    console.log(entries)

    const [addEntry, setAddEntry] = useState(true)

    // show/hide add topics form
    const addEntryToggle = () => {
        setAddEntry(!addEntry)
    }

    return (
        <StyledTopic>
            <StyledFirstRow>
                <StyledTitle>{topic.topicTitle} </StyledTitle>
                <span>{calculateWordCount(entries)} total words</span>
            </StyledFirstRow>
            <StyledLoggedEntry>
                {(entries.length > 1 && typeof entries === 'object') ?
                    entries.map((entry, index) => {
                        console.log(entries)
                        return <LoggedEntry key={index} date={entry.date} tags={entry.tags} wordCount={calculateWordCount(entry)} text={entry.text} />
                    }) : <LoggedEntry date={entries.date} tags={entries.tags} wordCount={calculateWordCount(entries)} text={entries.text} />}
            </StyledLoggedEntry>
            <div>
                <button onClick={addEntryToggle}>{(!addEntry) ? 'Add Entry' : 'Hide Add Entry'}</button>
            </div>
            <div>
                <br />
                {(addEntry) ? <AddEntry topic={topic} addEntryHandler={addEntryHandler} addEntryToggle={addEntryToggle} /> : null}
            </div>

        </StyledTopic>
    )
}

const StyledTitle = styled.h1`
    color: #6b23e0;
`

const StyledTopic = styled.div`
    padding-top: 1rem;
    margin-left: 20%;
    margin-right: 20%;
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