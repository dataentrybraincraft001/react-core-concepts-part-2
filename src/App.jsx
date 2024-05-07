import React from 'react'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'


const App = () => {
  return (

      <div className='text-center mt-20 '>
      <h1 className='text-5xl pb-10'>React Core Concepts 2</h1>
      <Friends/>
      <User/>
      <Counter/>
      <Team/>
      </div>

  )
}

export default App