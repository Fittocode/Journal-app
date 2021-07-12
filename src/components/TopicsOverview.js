// Step 1: Import React
import { React, useState } from 'react'
// style
import styled from 'styled-components'
// components
import AddTopic from './AddTopic'
import OverviewTopic from './OverviewTopic'

const TopicsOverview = ({ topicsList }) => {

    const [topics, setTopics] = useState(topicsList)
    const [addTopic, setAddTopic] = useState(false)

    const addTopicToggle = () => {
        setAddTopic(!addTopic)
    }

    const addTopicHandler = (topic) => {
        const topicsCopy = topics
        topicsCopy.push(topic)
        console.log(topic)
        console.log(topicsCopy)
        setTopics(topicsCopy)
        setAddTopic(!addTopic)

    }

    return (
        <div>
            <StyledFirstRow>
                <StyledHeadline>Recent/All Topics</StyledHeadline>
                <StyledHeadline><button onClick={addTopicToggle}>{(!addTopic) ? 'Add Topic' : 'Hide Add Topic'}</button></StyledHeadline>
            </StyledFirstRow>
            {(addTopic) ? <AddTopic clickToAdd={addTopicHandler} /> : null}
            {topics.map(topic => {
                return <OverviewTopic topicTitle={topic.topicTitle} topicWordCount={topic.topicWordCount} entries={topic.entries} />
            })}
        </div>

    )
}

const StyledHeadline = styled.h2`
  color: black;
`

const StyledFirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
    margin-right: 5%;
    margin-left: 20%;
`

export default TopicsOverview