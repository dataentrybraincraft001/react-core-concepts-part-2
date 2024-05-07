import React, { useState } from 'react'

const Team = () => {
    const [team, setTeam] = useState(11);

    const handelAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handelRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }


  return (
    <div className='flex justify-center'>
        <div className=' border-4 border-green-500 p-10 w-80 rounded-xl'>
        <h3 className='text-3xl font-semibold '>Players : {team}</h3>

        <button onClick={handelAdd} className='border border-purple-600 py-2 px-4 rounded-lg mt-6 hover:border-orange-600 font-semibold mr-4'>ADD Count</button>

        <button onClick={handelRemove} className='border border-purple-600 py-2 px-4 rounded-lg mt-6 hover:border-orange-600 font-semibold mr-4'>ADD Count</button>
        </div>
    </div>
  )
}

export default Team;