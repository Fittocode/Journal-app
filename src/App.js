// Step 1: Import React
import { React, useState } from 'react'
// style
import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle'
// JSON
import topicsJSON from './topics.json'
// components
import Navbar from './components/Navbar'
import Library from './components/Library'
import TopicsOverview from './components/TopicsOverview'

const IndexPage = () => {

  const [topics, setTopics] = useState(topicsJSON)

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Library title={'Featured Topics'} />
      <TopicsOverview topics={topics} />
    </div>
  )
}

export default IndexPage