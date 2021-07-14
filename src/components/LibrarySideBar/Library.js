import React from 'react'
// style
import styled from 'styled-components'

// components
import LibraryTopic from './LibraryTopic'

const Library = ({ title }) => {
    return (
        <StyledLibrary>
            <h1>{title}</h1>
            <LibraryTopic title={'How to get Maya to accept me as one of her own'} wordCount={145} date={"7/2/21"} firstTags={['#dogs ', '#Joe ', '#friendship ']} firstWords={`okay`} />

        </StyledLibrary>
    )
}

const StyledLibrary = styled.div`
            position: fixed;
            background-color: #C4C4C4;
            padding-top: 2rem;
            width: 21rem;
            height: 100%;
            overflow: scroll;
            h1 {
                text-align: center;
            }
`

export default Library