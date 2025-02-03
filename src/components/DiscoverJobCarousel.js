import React from "react";
import { mockData } from "../utils/mockData";

const DiscoverJobCarousel = () => {
  const {
    id,
    title,
    description,
    company,
    location,
    salary_from,
    salary_to,
    employment_type,
    application_deadline,
    qualifications,
    contact,
    job_category,
    is_remote_work,
    number_of_opening,
    created_at,
    updated_at,
  } = mockData;
  return (
    <div>
      <div className="  flex justify-center items-center mx-auto mt-12 w-11/12   ">
        <div className="carousel carousel-end rounded-box border border-orange-300 shadow-lg mb-7 bg-red-300 bg-opacity-30 h-96">
          
          <figure className=" pt-16 w-96  ">
          
            <img
            className="h-auto "
              src="https://static.naukimg.com/s/0/0/i/role-collection-ot.png"
              alt="Shoes"
            />
            <h1 className="my-6 ml-7 text-3xl text-white font-bold"> Discover jobs across popular roles</h1>
          </figure>


          <div className="  flex justify-center items-center mx-auto   w-7/12 pt-14  ">
        <div className="carousel carousel-end rounded-box border border-orange-300 shadow-lg mb-16  bg-red-300 bg-opacity-30  ">

          <div className="carousel-item cursor-pointer" >
                      {mockData.map((data) => {
                        return (
                          <div key={data.id} className="card bg-base-100 w-96 shadow-lg rounded-none mr-1 border border-white">
                          
                            <div className="card-body">
                              <h2 className="card-title font-bold text-blue-400">
                                Role :  {data.job_category} : {data.company}
                              </h2>
                              <h5 className="text-white">Location :{data.location}</h5>
                              <p className="text-white">
                               {data.description} 
                              </p>
                              <h5 className="font-semibold text-white"> Buget : INR {data.salary_from}-{data.salary_to}</h5>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    </div>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverJobCarousel;
