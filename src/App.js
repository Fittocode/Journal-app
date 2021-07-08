// Step 1: Import React
import * as React from 'react'
// style
import styled from 'styled-components'
// components
import GlobalStyle from './components/GlobalStyle'
import Navbar from './components/Navbar'
import topics from './topics.json'
import Library from './components/Library'
import OverviewTopics from './components/OverviewTopics'

const IndexPage = () => {
  return (
    <div>
      <GlobalStyle />

      <Navbar />
      <Library title={'Featured Topics'} />
      <StyledFirstRow>
        <StyledHeadline>Recent/All Topics</StyledHeadline>
        <StyledHeadline>Add Topic</StyledHeadline>
      </StyledFirstRow>
      {topics.map(topic => {
        return <OverviewTopics topicTitle={topic.topicTitle} topicWordCount={topic.topicWordCount} entries={topic.entries} />
      })}
    </div>

  )
}

const StyledHeadline = styled.h2`
  color: black;
  padding-top: 2rem;
    margin-right: 5%;
    margin-left: 20%;
`

const StyledFirstRow = styled.div`
    display: flex;
    justify-content: space-between;
`

export default IndexPage