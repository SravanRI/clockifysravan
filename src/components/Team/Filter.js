import React from 'react'

function Filter({filter,setFilter}) {
  return (
    <div>
      <input type='search' placeholder='search by name or email' value={filter || ''}
      onChange={(e) => setFilter(e.target.value) }/>
      console.log(filter)

    </div>
  )
}

export default Filter
