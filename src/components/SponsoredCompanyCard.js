import React from 'react'

const SponsoredCompanyCard = () => {

const arr=["IT Services","Technology","Manufacturing & Production", "Healthcare & Life Sciences",'BFSI',"Infrastructure, Transport & Real Estate"]

  return (
    <div>
        <h1 className='flex justify-center items-center font-extrabold text-2xl pb-4 text-blue-500 '> Sponsored companies </h1>
        <div className="  flex justify-between mx-auto  w-11/12 mb-10 ">
        {arr.map((data,index)=>{return <div key={index}className="carousel carousel-end text-blue-500 font-semibold rounded-box border border-blue shadow-lg mb-28 bg-white  bg-opacity-30 p-4 m-2 w-full">
          {data}
        </div>})}
        </div>
    </div>
  )
}

export default SponsoredCompanyCard