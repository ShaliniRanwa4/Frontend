import React from 'react'

const ExperienceDropdown = () => {
  return (
    <div className='w-full text-white my-5 border border-red-300  '>
       <div>
       <select className='mx-auto w-full bg-base-100 p-2'>
        <option value={1}>  1 year</option>
        <option value={2 }> 2 years</option>
        <option value={3}>3 years </option>
        <option value={4}> 4 years</option>
       </select>
       </div>
    </div>
  )
}

export default ExperienceDropdown