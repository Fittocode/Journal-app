// Step 1: Import React
import { React, useState } from 'react'
// JSON
import topicsJSON from '../topics.json'
// components
import DynamicSearch from './DynamicSearch'

function DynamicTopics() {
    const [topics, setTopics] = useState(topicsJSON)
    // const [entries, setEntries] = useState(topic.entries)
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

    const addEntryHandler = (topic, entry) => {
        const entriesCopy = topic.entries
        entriesCopy.push(entry)
    }

    const deleteTopic = (topic, topics) => {
        if (topics.length > 0) {
            const index = topics.indexOf(topic)
            const topicsCopy = topic
            topicsCopy.splice(index, 1)
            setTopics(topicsCopy)
        }
    }

    const deleteEntry = (deleteTopic, entries, entry, topic, topics) => {

        if (entries.length === 1) {
            deleteTopic(topic, topics)
        }
        const index = entries.indexOf(entry)
        entries.splice(index, 1)


        return entries
    }

    return (
        <div>
            <DynamicSearch
                topicsList={topics}
                addTopicToggle={addTopicToggle}
                addTopicHandler={addTopicHandler}
                addEntryHandler={addEntryHandler}
                addTopic={addTopic}
                deleteEntry={deleteEntry}
                deleteTopic={deleteTopic}
            />
        </div>
    )
}

export default DynamicTopics