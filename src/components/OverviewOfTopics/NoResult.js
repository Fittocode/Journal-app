import React from 'react'

function NoResult() {
    return (
        <div className="topics">
            <div className="first-row">
                <h1 className="topic-title">Whoops, looks like we don't have what you're looking for!</h1>
            </div>
            <br />
            <div className="entry">
                <p>Make sure everything was spelled correctly!</p>
            </div>
        </div>
    )
}

export default NoResult
