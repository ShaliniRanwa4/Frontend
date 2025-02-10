import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CurrentOpenCard = () => {
  const currentJob = useSelector((store) => store.job.currentJob);

  const jobId = currentJob.id;

  const {
    job_category,
    company,
    location,
    salary_from,
    salary_to,
    is_remote_work,
    qualifications,
    description,
    application_deadline,
    contact,
  } = currentJob;

  return (
    <div className="mt-10 mb-20 top-20   p-4   w-3/6">
      <div className="card bg-base-100 w-auto shadow-xl h-screen ">
        <div>
          <div className="card-body cursor-pointer">
            <h2 className="card-title font-bold text-3xl">{job_category}</h2>
            <div>
              {company}
              <h3>{location}</h3>
              Buget : {salary_from}-{salary_to}
            </div>
            <Link to={"/job/" + jobId}>
              <button className="btn btn-outline w-full btn-info">
                Apply Now
              </button>
            </Link>

            <div className="  my-2  overflow-y-scroll  p-2  w-full h-full bg-white ">
              <div className="carousel carousel-vertical rounded-box h-96 cursor-pointer w-full  ">
                <div className="carousel-item  text-black font-bold text-lg pt-2 mx-auto ">
                  Profile Insights :<h2>{job_category}</h2>
                </div>
                <div className="carousel-item  text-black font-bold text-lg pt-5 mx-auto ">
                  Company : {company}
                </div>
                <div className="carousel-item  text-black font-medium text-lg pt-5 mx-auto flex justify-between  ">
                  <h3 className="px-4"> Location : {location} </h3>
                  <h3> Remote : {is_remote_work}</h3>
                </div>
                <div className="carousel-item  text-black font-normal text-lg pt-5  flex justify-between  ">
                  <h2> Contact No :{contact} </h2>
                  <h1 className="text-black"> | </h1>
                  <h2> Application Deadline: {application_deadline}</h2>
                </div>

                <div className="carousel-item  ">
                  <span className="text-lg text-black mx-auto font-bold">
                    {" "}
                    Skills{" "}
                  </span>
                </div>
                <div className="carousel-item py-2 ">
                  <span className="text-base text-black mx-auto font-bold">
                    {" "}
                    {qualifications}{" "}
                  </span>
                </div>

                <div className="carousel-item  text-lg text-black">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentOpenCard;
