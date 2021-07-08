import { React, useState } from 'react'
import ReactQuill from 'react-quill';
// style
import styled from 'styled-components'

const AddTopic = () => {

    const [text, setText] = useState('')
    const [topicTitle, setTopicTitle] = useState('')
    const [date, setDate] = useState('')
    const [tags, setTags] = useState('')

    const handleChange = (value) => {
        setText(value)
    }

    const handleSubmit = (text) => {

    }

    return (
        <StyledAddTopic>
            <form>
                <label>
                    Topic Title:
                    <input name="topic" type="text" value={topicTitle}></input>
                </label>
                <label>
                    Date Created:
                    <input name="date" type="text" value={date}></input>
                </label>
            </form>
            <br />
            <p>For your first entry, it's a good idea to give a brief description of what your topic will be about. If you're not sure, add a random thought. You can always update it later!</p>
            <br />
            <ReactQuill value={text}
                onChange={handleChange} />
            <br />
            <form>
                <label>
                    Entry keywords:
                    <input name="tags" type="text" value={tags}></input>
                </label>
            </form>
            <br />
            <button onSubmit={() => handleSubmit(text)}>Add Topic</button>
        </StyledAddTopic>

    )
}

export default AddTopic

const StyledAddTopic = styled.div`
    padding: 2rem 0rem 0rem;
    margin-right: 5%;
    margin-left: 20%;
`