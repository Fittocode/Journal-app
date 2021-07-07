// Step 1: Import React
import * as React from 'react'
// components
import GlobalStyle from './components/GlobalStyle'
import Navbar from './components/Navbar'
import Library from './components/Library'
import Topic from './components/Topic'

const IndexPage = () => {
  return (
    <div>
      <GlobalStyle />

      <Navbar />
      <Library title={'Recent Entries'} />
      <Topic title={'How to get Maya to accept me as one of her own'} date={'7/2/21'} wordCount={50} />

    </div>

  )
}


export default IndexPage