// Step 1: Import React
import { React, useState } from 'react'
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
        console.log(topicsCopy)
        setAddTopic(!addTopic)
    }

    const addEntryHandler = (topic, entry) => {
        const entriesCopy = topic.entries
        console.log(entriesCopy)
        console.log(topic.entries)
        topic.entries.push(entry)
    }

    return (
        <div>
            <DynamicSearch
                topicsList={topics}
                addTopicToggle={addTopicToggle}
                addTopicHandler={addTopicHandler}
                addEntryHandler={addEntryHandler}
                addTopic={addTopic}
            />
        </div>
    )
}

export default DynamicTopics