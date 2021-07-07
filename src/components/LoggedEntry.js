import React from 'react'
// style
import styled from 'styled-components'

const LoggedEntry = ({ date, tags, entryWordCount, text }) => {
    return (
        <StyledSub>
            <hr />
            <StyledFirstRow>
                <span>{date}</span>
                <span>{entryWordCount} words</span>
            </StyledFirstRow>
            <br />
            <StyledTag>{tags}</StyledTag>
            <br />
            <p>{text}</p>
            <br />
            <br />
            <button>Hide this entry</button>
        </StyledSub>
    )
}

const StyledSub = styled.div`
    padding-bottom: 1rem;
`

const StyledFirstRow = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledTag = styled.div`
    color: #1EA48C;
`

export default LoggedEntry