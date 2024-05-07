import React from 'react'

const Friend = ({friend}) => {
    const {name ,email} = friend
  return (
    <div>
        <div className='p-4 border border-cyan-400 mb-4'>
        <h4>Name : <span className='text-yellow-400'> {name}</span> </h4>
        <p>Email : <span className='text-lime-400'>{email}</span> </p>
        </div>
    </div>
  )
}

export default Friend