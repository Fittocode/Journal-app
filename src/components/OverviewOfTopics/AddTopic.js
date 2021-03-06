import React, { useState } from 'react'

const AddTopic = ({ clickToAdd }) => {

    const defaultDate = () => {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        let newdate = month + "/" + day + "/" + year;
        return newdate
    }

    const [topicTitle, setTopicTitle] = useState('')
    const [date, setDate] = useState(defaultDate())
    const [tags, setTags] = useState([])
    const [text, setText] = useState('')

    const handleTopicInput = (event) => {
        setTopicTitle(event.target.value)
    }

    const handleDateInput = (event) => {
        setDate(event.target.value)
    }

    const handleTextInput = (event) => {
        setText(event.target.value)
    }

    const handleTagsInput = (event) => {
        const tagsValues = () => {
            if (event.target.value.includes(',')) {
                return event.target.value.split(',')
            } else {
                return event.target.value
            }
        }
        setTags(tagsValues())
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        clickToAdd({
            topicTitle,
            entries: [{
                date: date,
                tags: tags,
                text: text
            }]
        })

        setTopicTitle('')
    }
    return (
        <div className="add-topic">
            <form onSubmit={handleSubmit}>
                <label className="labels">
                Topic Title: 
                    <input name="topicTitle" type="text" value={topicTitle} onChange={handleTopicInput}></input>
                </label>
                <label className="labels">
                Date Created:
                    <input name="date" type="text" value={date} onChange={handleDateInput} placeholder="Month/Day/Year"></input>
                </label>
                <div>
                    <p style={{ padding: "10px 0px 10px" }}>For your first entry, it's a good idea to give a brief description of what your topic will be about. If you're not sure, add a random thought. You can always update it later!</p>
                    <textarea className="textarea" name="text" type="text" value={text} onChange={handleTextInput} placeholder="What's on your mind?" />
                    <br />
                </div>
                Entry keywords:
                <label className="labels">
                    <input name="tags" type="text" value={tags} onChange={handleTagsInput}></input>
                </label>
                (Use commas with no spaces to separate tags)
                <div>
                    <br />
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTopic