// Step 1: Import React
import { React, useState } from 'react'
// style
import GlobalStyle from './GlobalStyle'
// JSON
import topicsJSON from '../topics.json'
// components
import Navbar from './Navbar'
import Library from './Library'
import TopicsOverview from './TopicsOverview'

function DynamicTopics() {
    const [topics, setTopics] = useState(topicsJSON)
    const [addTopic, setAddTopic] = useState(false)

    // filter out all topics except topics with search keyword
    const searchTopics = (index) => {
        setTopics(topics.filter((topic, i) => {
            return i !== index
        }))
    }

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
            <Navbar searchTopics={searchTopics} />
            {/* <Library title={'Featured Topics'} /> */}
            <TopicsOverview topicsList={topics} addTopicToggle={addTopicToggle} addTopicHandler={addTopicHandler} addTopic={addTopic} />
        </div>
    )
}

export default DynamicTopics