// Step 1: Import React
import { React, useState } from 'react'
// style
import GlobalStyle from './GlobalStyle'
// JSON
import topicsJSON from '../topics.json'
// components
import DynamicSearch from './DynamicSearch'

function DynamicTopics() {
    const [topics, setTopics] = useState(topicsJSON)
    const [addTopic, setAddTopic] = useState(false)

    // show/hide add topics form
    const addTopicToggle = () => {
        setAddTopic(!addTopic)
    }

    // add new topic + first entry to topics json
    const addTopicHandler = (topic) => {
        const topicsCopy = topics

        topicsCopy.push(topic)

        setTopics(topicsCopy)
        setAddTopic(!addTopic)
    }

    const deleteTopic = () => {

    }

    return (
        <div>
            <GlobalStyle />
            <DynamicSearch topicsList={topics} addTopicToggle={addTopicToggle} addTopicHandler={addTopicHandler} addTopic={addTopic} />
        </div>
    )
}

export default DynamicTopics