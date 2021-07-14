import Quill from 'quill';
import React, { Component, useState } from 'react'
import ReactQuill from 'react-quill';
// style
import styled from 'styled-components'

class AddTopic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topicTitle: 'Untitled',
            entries: {
                date: this.defaultDate(),
                tags: ['uninspired'],
                text: `...`
            }
        }
    }

    defaultDate = () => {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        let newdate = month + "/" + day + "/" + year;
        return newdate
    }

    handleTopicInput = (event) => {
        this.setState({
            topicTitle: event.target.value,
        })
    }

    handleTextInput = (event) => {
        this.setState({
            entries: {
                ...this.state.entries,
                text: event.target.value
            }
        })
        console.log(this.state.entries)
    }

    handleDateInput = (event) => {
        this.setState({
            entries: {
                ...this.state.entries,
                date: event.target.value
            }
        })
    }

    handleTagsInput = (event) => {
        const tagsValues = () => {
            if (event.target.value.includes(',')) {
                let tagsArray = event.target.value.split(',')
                return tagsArray
            } else {
                return event.target.value
            }
        }
        this.setState({
            entries: {
                ...this.state.entries,
                tags: tagsValues()
            }
        })

    }


    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.clickToAdd(this.state)
        this.setState({
            topicTitle: '',
            entries: {
                date: '',
                tags: [],
                text: ''
            }
        })
    }

    render() {
        return (
            <StyledAddTopic>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Topic Title:
                        <input name="topicTitle" type="text" value={this.state.topicTitle} onChange={this.handleTopicInput}></input>
                    </label>
                    <label>
                        Date Created:
                        <input name="date" type="text" value={this.state.entries.date} onChange={this.handleDateInput} placeholder="Month/Day/Year"></input>
                        Leave blank for today's date
                    </label>
                    <div>
                        <br />
                        <p>For your first entry, it's a good idea to give a brief description of what your topic will be about. If you're not sure, add a random thought. You can always update it later!</p>
                        <br />
                        {/* <ReactQuill value={state.text || ""}
                            onChange={(e) => handleChange(e)} /> */}
                        <textarea name="text" type="text" value={this.state.entries.text} onChange={this.handleTextInput} placeholder="What's on your mind?" cols="100" rows="10" />

                        <br />
                    </div>
                    <label>
                        Entry keywords:
                        <input name="tags" type="text" value={this.state.entries.tags} onChange={this.handleTagsInput}></input>
                        (Use commas with no spaces to separate tags)
                    </label>
                    <div>
                        <br />
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </StyledAddTopic>
        )
    }
}

// class AddTopic extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             topicTitle: '',
//             date: '',
//             tags: [],
//             text: 'This is where you will write text'
//         }
//     }

//     handleChange(event) {
//         const value = event.target.value
//         this.setState({
//             ...this.state,
//             [event.target.name]: value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         this.props.clickToAdd(this.state)
//         this.setState({
//             topicTitle: '',
//             date: '',
//             tags: [],
//             text: ''
//         })
//     }

//     render() {
//         return (
//             <StyledAddTopic>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Topic Title:
//                         <input name="topicTitle" type="text" value={this.state.topicTitle} onChange={this.handleChange}></input>
//                     </label>
//                     <label>
//                         Date Created:
//                         <input name="topicDateCreation" type="text" value={this.state.date} onChange={this.handleChange}></input>
//                     </label>
//                     <div>
//                         <br />
//                         <p>For your first entry, it's a good idea to give a brief description of what your topic will be about. If you're not sure, add a random thought. You can always update it later!</p>
//                         <br />
//                         {/* <ReactQuill value={state.text || ""}
//                             onChange={(e) => handleChange(e)} /> */}
//                         <textarea name="firstEntryText" type="text" value={this.state.text} onChange={this.handleChange} />

//                         <br />
//                     </div>
//                     <label>
//                         Entry keywords:
//                         <input name="firstEntryTags" type="text" value={this.state.tags} onChange={this.handleChange}></input>
//                     </label>
//                     <div>
//                         <br />
//                         <input type="submit" value="submit" />
//                     </div>
//                 </form>
//             </StyledAddTopic >

//         )
//     }
// }



const StyledAddTopic = styled.div`
    padding: 2rem 0rem 0rem;
    margin-right: 5%;
    margin-left: 20%;
`
export default AddTopic