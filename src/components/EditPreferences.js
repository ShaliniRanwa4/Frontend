import React from 'react'
import { Link } from 'react-router-dom'

const EditPreferences = () => {
  return (
    <div className="my-28">
       
    <div className="w-1/3 container mx-auto    ">
    <Link  className="text-3xl my-2 text-white" to={'/profile'}>🔙</Link>
      <h1 className="flex justify-start font-bold text-4xl text-white py-3 my-1">
        
      Job preferences

      </h1>
      <span>
      Tell us the job details you’re interested in to get better recommendations across Indeed.

Employers may see these preferences when your resume is set to searchable.
      </span>
      <div className="border-y border-blue-300 my-3 flex justify-between py-7">
        <h3 className="font-bold text-lg text-blue-600 cursor-pointer">
        Add job titles
        </h3>
        <h3 className="text-xl  cursor-pointer">✙</h3>
       
      </div>
      <div className="border-y border-blue-300 my-3 flex justify-between py-7">
        <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
        Add job types
        </h3>
        <h3 className="text-xl  cursor-pointer"> ✙</h3>
      </div>
      <div className="border-y border-blue-300 my-3 flex justify-between py-7">
        <h3 className="font-bold text-lg text-blue-600  cursor-pointer ">
        Add work schedule
        </h3>
        <h3 className="text-xl  cursor-pointer"> ✙</h3>
      </div>
      <div className="border-y border-blue-300 my-3 flex justify-between py-7">
        <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
        Add pay
        </h3>
        <h3 className="text-xl v"> ✙</h3>
      </div>

      <div className="border-y border-blue-300 my-3 flex justify-between py-7">
        <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
        Add relocation
        </h3>
        <h3 className="text-xl  cursor-pointer"> ✙</h3>
      </div>
      <div className="border-y border-blue-300 my-3 flex justify-between py-7">
        <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
        Add remote
        </h3>
        <h3 className="text-xl  cursor-pointer" > ✙</h3>
      </div>

    </div>
  </div>
  )
}

export default EditPreferences