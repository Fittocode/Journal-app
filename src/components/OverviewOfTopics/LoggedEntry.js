import React from 'react'
// style
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const LoggedEntry = ({ date, tags, text, wordCount, textIndexesOfSearch }) => {

    let textStartIndex = textIndexesOfSearch[0]
    let textEndIndex = textIndexesOfSearch[1]

    const location = useLocation()
    console.log(location.pathname)

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
            {(location.pathname === '/') ? <p>{text.slice(0, textStartIndex)}<StyledHighlightedText>{text.slice(textStartIndex, textEndIndex)}</StyledHighlightedText>{text.slice(textEndIndex, text.length)}</p> : <p>{text}</p>}
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

const StyledHighlightedText = styled.span`
    background-color: #fdf293;

`

export default LoggedEntry