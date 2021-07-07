import React from 'react'
// style 
import styled from 'styled-components'
import topics from './topics.json'
// components
import LoggedEntry from './LoggedEntry'
import NewEntry from './NewEntry'

const Topic = ({ title, date, wordCount }) => {

    const myJSON = topics

    console.log(topics[0])

    const entryArray = []
    return (
        <StyledTopic>
            <StyledFirstRow>
                <h1>{title} </h1>
                <span>{wordCount} words</span>
            </StyledFirstRow>
            <StyledLoggedEntry>
                <LoggedEntry date={date} tags={'#moving'} entryWordCount={24} text={`Despite the nibbling, I think I'm making headway`} />
                <LoggedEntry date={date} tags={'#moving'} entryWordCount={24} text={`Just when I thought we were friends, she farted on me`} />
            </StyledLoggedEntry>
            <NewEntry />
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