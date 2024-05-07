import React, { useEffect, useState } from 'react'

const User = () => {

    const [user, setUser] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    } ,[])

  return (
    <div>
        <div>
            <h3 className='text-3xl font-semibold mt-6'>User : {user.length}</h3>
        </div>
    </div>
  )
}

export default User