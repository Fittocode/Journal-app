// Step 1: Import React
import { React } from 'react'
// style
import GlobalStyle from './components/GlobalStyle'
// components
import DynamicTopics from './components/DynamicTopics'

const App = () => {

  return (
    <div>
      <GlobalStyle />
      <DynamicTopics />
    </div>
  )
}

export default App