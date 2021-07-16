import React from 'react'
// style
import styled from 'styled-components'

const LoggedEntry = ({ date, tags, text, wordCount }) => {

    console.log(text)

    return (
        <StyledSub>
            <hr />
            <StyledFirstRow>
                <span>{date}</span>
                <span>{(text === '') ? 7 : wordCount} {(wordCount === 1) ? `word` : `words`}</span>
            </StyledFirstRow>
            <br />
            <StyledTag>{(tags.length > 1 && typeof tags === 'object') ? tags.map(tag => {
                return `#${tag} `
            }) : `#${tags}`}</StyledTag>
            <br />
            <p>{text}</p>
            <br />
        </StyledSub>
    )
}

const StyledSub = styled.div`
    padding-bottom: 0rem;
`

const StyledFirstRow = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledTag = styled.div`
    color: #16caa9;
`

export default LoggedEntry