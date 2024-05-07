import React, { useEffect, useState } from 'react'
import Friend from './Friend';


const Friends = () => {
    const [friends,setfriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfriends(data))
    },[])

  return (
    <div className='flex justify-center'>
        <div className=' border-4 border-green-500 p-10 w-auto rounded-xl'>
            <h3 className='text-3xl font-semibold '>Friends : {friends.length}</h3>
            {
                friends.map(friend  => <Friend friend={friend} />)
            }
        </div>
    </div>
  )
}

export default Friends