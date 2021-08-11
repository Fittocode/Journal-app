import Quill from 'quill';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';

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
                <label>
                    Topic Title:
                    <input name="topicTitle" type="text" value={topicTitle} onChange={handleTopicInput}></input>
                </label>
                <label>
                    Date Created:
                    <input name="date" type="text" value={date} onChange={handleDateInput} placeholder="Month/Day/Year"></input>
                </label>
                <div>
                    <br />
                    <p>For your first entry, it's a good idea to give a brief description of what your topic will be about. If you're not sure, add a random thought. You can always update it later!</p>
                    <br />
                    {/* <ReactQuill value={state.text || ""}
                            onChange={(e) => handleChange(e)} /> */}
                    <textarea name="text" type="text" value={text} onChange={handleTextInput} placeholder="What's on your mind?" cols="100" rows="10" />

                    <br />
                </div>
                <label>
                    Entry keywords:
                    <input name="tags" type="text" value={tags} onChange={handleTagsInput}></input>
                    (Use commas with no spaces to separate tags)
                </label>
                <div>
                    <br />
                    <input type="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTopic