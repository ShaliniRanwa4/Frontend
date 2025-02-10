import React from 'react'
import { mockData } from '../utils/mockData'
import { useDispatch } from 'react-redux'
import { setCurrentJob } from '../utils/jobSlice'
// import { useDispatch } from 'react-redux'
// import { addCurrentJob } from '../utils/jobSlice'

const VerticalCard = () => {

  const dispatch=useDispatch()

  

  return (
    <div className='mt-10 mb-20 top-20 flex-1 overflow-y-scroll h-screen p-4 mx-auto  w-3/6 '>
     
<div className='space-y-4'>
{mockData.map((card)=>{ return (
 
  <div key={card.id} className="card bg-base-100 w-auto shadow-xl cursor-pointer" onClick={()=>dispatch(setCurrentJob(card))}>
    
  <div className="card-body">
    <h2 className="card-title">{card.job_category} : {card.company}</h2>
    <h3>Location :{card.location}</h3>
    <p>{card.qualifications}</p>
    <p>{card.description}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Apply Now</button> */}
    </div>
  </div>
 
</div>)
})}



    </div>
    
    
    </div>
  )
}

export default VerticalCard