import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setAllJobs, setCurrentJob } from "../utils/jobSlice";
import { mockData } from "../utils/mockData";
// import OtherJobOpenings from "./OtherJobOpenings";

const JobDetails = () => {
  const { jobId } = useParams();
  const currentJob = useSelector((store) => store.job.currentJob);
  const dispatch = useDispatch();
  const allJobs = useSelector((store) => store.job.allJobs);
  const navigate=useNavigate()
  // const currentJob = allJobs.find((job) => job.id.toString() === jobId);
 

  useEffect(() => {
    dispatch(setAllJobs(mockData));
  }, [dispatch,jobId]);

  const handleCurrentJob=(job,jobId)=>{
    dispatch(setCurrentJob(job))
     return navigate("/job/" + jobId)
  }


  const filteredAllJobs = allJobs.filter((job) => job.id.toString() !== jobId);

  if (!currentJob || currentJob.id.toString() !== jobId) {
    return <p> Job not found! Please go back and select a job</p>;
  }

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
    <div className="flex flex-col lg:flex-row pt-28 bg-white  mb-16 p-6  w-full max-w-7xl mx-auto cursor-pointer">
      {/* Job Details Section - 50% width */}
      <div className="lg:w-3/4 w-full p-4 bg-white shadow-xl border border-blue-500 rounded-md ">
        <h2 className="text-blue-600 font-bold text-3xl">{job_category}</h2>
        <p className="text-blue-500">
          <strong>Company:</strong> {company}
          <br />
          <strong>Location:</strong> {location}
          <br />
          <strong>Budget:</strong> {salary_from} - {salary_to}
          <br />
          <strong>Remote Work:</strong> {is_remote_work ? "Yes" : "No"}
          <br />
          <strong>Contact No:</strong> {contact}
          <br />
          <strong>Application Deadline:</strong> {application_deadline}
        </p>
        <div className="my-4 overflow-y-scroll p-4 h-96 bg-blue-100 rounded-md">
          <h3 className="text-blue-600 font-bold text-lg">Profile Insights:</h3>
          <p className="text-blue-500">{description}</p>
          <h3 className="text-blue-600 font-bold mt-4">Skills</h3>
          <p className="text-blue-500">{qualifications}</p>
        </div>
      </div>

      {/* Other Jobs List - 50% width */}
      
      <div className="lg:w-1/4 w-full  lg:mt-0 h-[90vh] overflow-y-scroll bg-white shadow-xl border border-blue-500 p-4 rounded-md mx-6">
        <h2 className="text-blue-600 font-bold text-xl mb-4">
          Other Job Openings
        </h2>

        
          {" "}
          <div
            className="space-y-4"
           
          >
            {filteredAllJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 bg-blue-100 rounded-md shadow-md"
                onClick={()=>handleCurrentJob(job,job.id)}
               
              >
                <h3 className="text-blue-600 font-bold">
                  {job.job_category} - {job.company}
                </h3>
                <p className="text-blue-500">Location: {job.location}</p>
              </div>
            ))}
          </div>
    
      </div>
    </div>
  );
};

export default JobDetails;
