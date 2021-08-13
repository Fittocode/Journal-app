import React, { Component } from 'react'

class AddEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: this.defaultDate(),
            tags: [''],
            text: '',
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

    handleChange = (event) => {
        const name = event.target.name
        this.setState({
            ...this.state.entries,
            [name]: event.target.value
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
            ...this.state.entries,
            tags: tagsValues()
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.addEntryHandler(this.props.topic, this.state)
        this.props.addEntryToggle()
        this.setState({
            date: '',
            tags: [],
            text: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Date Created:
                    <label className="labels">
                        <input name="date" type="text" value={this.state.date} onChange={this.handleChange} placeholder="Month/Day/Year"></input>
                    </label>
                    <div>
                        <br />
                        <textarea className="textarea" name="text" type="text" value={this.state.text} onChange={this.handleChange} placeholder="What's on your mind?" cols="100" rows="10" />
                        <br />
                    </div>
                    Entry keywords:
                    <label className="labels">
                        <input name="tags" type="text" value={this.state.tags} onChange={this.handleTagsInput}></input>
                    </label>
                    (Use commas with no spaces to separate tags)
                    <div>
                        <br />
                        <input type="submit" value="submit" />
                    </div>
                </form>
            </div >

        )

    }

}

export default AddEntry