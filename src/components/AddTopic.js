import { React, useState } from 'react'
import ReactQuill from 'react-quill';

const AddTopic = () => {

    const [text, setText] = useState('')

    const handleChange = (value) => {
        setText(value)
    }

    const handleSubmit = (text) => {

    }

    return (
        <div>
            <ReactQuill value={text}
                onChange={handleChange} />
            <button onSubmit={() => handleSubmit(text)}>Submit Topic</button>
        </div>

    )
}

export default AddTopic