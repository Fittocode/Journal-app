import React, { Component } from 'react'
// components
import LibraryTopic from './LibraryTopic'
// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// uuidv4()
import { v4 as uuidv4 } from 'uuid';

class Library extends Component {

    
    render() {
        console.log(this.props.topicsList)
        return (
            <Router>
            <div className={`library ${this.props.libraryStatus ? 'active-library' : ''}`}>
                <div className="library-title">
                    <h2>Recent Entries</h2> 
                    <h2 onClick={this.props.libraryToggle} style={{cursor: "pointer"}}>X</h2>
                </div>
                <div className="library-songs">
                    {this.props.topicsList.map((topic) => {
                        console.log(topic.key)
                        return  <LibraryTopic key={uuidv4()} topicTitle={topic.topicTitle} date={topic.entries[0].date} tags={topic.entries[0].tags} text={topic.entries[0].text} />
                      
                    }).reverse()}
                </div>
            </div>
            </Router>
        )
    }
    
}

export default Library