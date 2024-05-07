import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)

    const handelAddCount = () =>{
        const newConut = count + 1;
        setCount(newConut);
    }

    const handelReduceCount = () =>{
        const newcount = count - 1;
        setCount(newcount);
    }

  return (
    <div className='flex justify-center py-6'>
      <div className=' border-4 border-red-500 p-10 w-80 rounded-xl'>
        
        <h3 className='text-3xl font-semibold'>Counter : <span className='text-yellow-500'>{count}</span></h3>

        <button onClick={handelAddCount} className='border border-purple-600 py-2 px-4 rounded-lg mt-6 hover:border-orange-600 font-semibold mr-4'>ADD Count</button>

        <button onClick={handelReduceCount} className='border border-purple-600 py-2 px-4 rounded-lg mt-6 hover:border-orange-600 font-semibold'>Reduce</button>
      </div>
    </div>
  )
}

export default Counter