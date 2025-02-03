import React from "react";
import { mockData } from "../utils/mockData";
import DiscoverJobCarousel from "./DiscoverJobCarousel";
import SponsoredCompanyCard from "./SponsoredCompanyCard";
import { Link } from "react-router-dom";

const Homepage = () => {
  // const {
  //   id,
  //   title,
  //   description,
  //   company,
  //   location,
  //   salary_from,
  //   salary_to,
  //   employment_type,
  //   application_deadline,
  //   qualifications,
  //   contact,
  //   job_category,
  //   is_remote_work,
  //   number_of_opening,
  //   created_at,
  //   updated_at,
  // } = mockData
  return (
    <>
     <Link to={'/login'}> <h2 className="flex justify-end text-base text-orange-400 cursor-pointer mt-24" > Want personalized job matches ? Login /Sign Up ! </h2></Link>

    

      <h1 className="flex justify-center items-center font-extrabold my-5 text-yellow-700 card-title text-3xl  ">
        Welcome To Job Portal{" "} 👋 Simplify your job search 
      </h1>

      <DiscoverJobCarousel></DiscoverJobCarousel>
    
      <h1 className="flex justify-center items-center font-extrabold my-5 text-blue-700 card-title ">
        Recent Job Openings 
      </h1>
      <div className="  flex justify-center items-center mx-auto mt-10  w-11/12 cursor-pointer ">
        <div className="carousel carousel-end rounded-box  border border-orange-300 shadow-lg mb-8 h-96" >
          <div className="carousel-item " >
            {mockData.map((data) => {
              return (
                <div key={data.id} className="card bg-base-100 w-96 shadow-lg border border-white rounded-none mr-2">
                  <figure className="h-40">
                    <img
                      src="https://images.pexels.com/photos/7078175/pexels-photo-7078175.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Shoes"
                    />
                  </figure>
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




      
         <h1 className="flex justify-center items-center font-extrabold my-5 text-blue-700 card-title ">
         Top companies hiring now
      </h1>
      <div className="  flex justify-center items-center mx-auto mt-10  w-11/12 cursor-pointer ">
        <div className="carousel carousel-end rounded-box border border-orange-300 shadow-lg mb-12 h-96" >
          <div className="carousel-item" >
            {mockData.map((data) => {
              return (
                <div key={data.id} className="card bg-base-100 w-96 shadow-lg rounded-none mr-2 border border-white">
                  <figure className="h-40">
                    <img
                      src="https://images.pexels.com/photos/7078175/pexels-photo-7078175.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Shoes"
                    />
                  </figure>
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
      
      
      <SponsoredCompanyCard></SponsoredCompanyCard>
                  
              
    </>
  );
};

export default Homepage;
