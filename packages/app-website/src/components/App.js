import React from 'react'
import portfolio from '../resources/portfolio'

function App() {
  return (
    <>
      <h1 className='adasd'>Website</h1>
      {portfolio.map(work => (
        <pre key={work.id}>{JSON.stringify(work, null, 2)}</pre>
      ))}
    </>
  )
}

export default App
