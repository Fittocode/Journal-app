import React from 'react'
// components
import LoggedEntry from './LoggedEntry'
// Router
import { Link } from 'react-router-dom'

const OverviewTopic = ({ topicTitle, entries, calculateWordCount, entryWordCount, index, filteredIndex, textIndexesOfSearch, searchSelector }) => {

    let featuredEntry = entries[filteredIndex]

    const topicURL = (topicTitle) => {
        let topicTitleURL = topicTitle.split(' ').join('-')
        return (topicTitle.includes('?')) ? topicTitleURL.slice(0, topicTitle.length - 1) : topicTitleURL
    }

    return (
        <div className="topics hover-overview" style={{ paddingLeft: '0rem', paddingRight: '0rem', paddingBottom: '0rem' }}>
            <Link to={`/${topicURL(topicTitle)}`} className="text-placeholder">
                <div className="ov-row">
                    <div className="ov-row">
                        <h2>{topicTitle}</h2>
                    </div>
                    {/* <span>{(calculateWordCount(entries, index) === 1) ? `1 word` : `${calculateWordCount(entries, index)} total words`}</span> */}
                    <div className="ov-entry">Entries: {(entries[entries.length - 1]) ? entries.length : 1}</div>
                </div>
                <div className="logged-entry">
                    <LoggedEntry date={featuredEntry.date} tags={featuredEntry.tags} text={featuredEntry.text} wordCount={entryWordCount(featuredEntry.text)} textIndexesOfSearch={textIndexesOfSearch} searchSelector={searchSelector} />
                </div>
            </Link>
        </div >
    )
}

export default OverviewTopic