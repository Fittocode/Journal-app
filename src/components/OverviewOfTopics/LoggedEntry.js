import React from 'react'
// style
import styled from 'styled-components'

const LoggedEntry = ({ date, tags, text, wordCount, textIndexOfSearch }) => {

    const preHighlightText = (text) => {
        let preHighlightText = text.slice(0, textIndexOfSearch[0])
        console.log(preHighlightText)
        let newText = text.replace(preHighlightText, preHighlightText)
        return preHighlightText
    }

    const highlightText = (text) => {
        let highlightText = text.slice(textIndexOfSearch[0], textIndexOfSearch[1])
        return highlightText
    }

    const postHighlightText = (text) => {
        let postHighlightText = text.slice(textIndexOfSearch[1], text.length - 1)
        console.log(postHighlightText)
        return postHighlightText
    }

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
            <p>{preHighlightText(text)}<StyledHighlightedText>{highlightText(text)}</StyledHighlightedText>{postHighlightText(text)}</p>
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
    background-color: #6b23e0;
    color: white;
`

export default LoggedEntry