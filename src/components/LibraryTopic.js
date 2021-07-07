import React from 'react'
// style 
import styled from 'styled-components'

const LibraryTopic = ({ title, wordCount, date, firstTags, firstWords }) => {
    return (
        <StyledLibraryTopic>
            <StyledFirstLine>
                <h3>{title}</h3>
                <h4>{wordCount} words</h4>
            </StyledFirstLine>
            <p>created {date}</p>
            <StyledLine></StyledLine>
            <StyledTags>{firstTags}</StyledTags>
            <p>{firstWords}</p>
        </StyledLibraryTopic>
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