import React from "react";
// import ExperienceDropdown from "./ExperienceDropdown";
import DialogBox2 from "./DialogBox2";

const CurrentOpenCard = () => {

const handleClick=()=>{
  document.getElementById("my_modal_1").showModal()
}

  return (
    <div className="mt-10 mb-20 top-20   p-4   w-3/6">
      <div className="card bg-base-100 w-auto shadow-xl h-screen ">
        <div>
          <div className="card-body cursor-pointer">
            <h2 className="card-title font-bold text-3xl">ReactJS Developer</h2>
            <p>
              Conscious Foundation
              <h3>Khatipura, Jaipur, Rajasthan</h3>
              ₹20,000 - ₹25,000 a month
            </p>
            {/* <div class="border-t-2 border-blue-500 w-full mx-auto pb-96"></div> */}

            <div className="  my-6   overflow-y-scroll  p-4   w-full h-full bg-red-300 ">
              <div className="carousel carousel-vertical rounded-box h-96 cursor-pointer w-full  ">
                <div className="carousel-item  text-black font-bold text-lg pt-5 mx-auto ">
                 
                  Profile Insights
                </div>
                <div className="carousel-item py-9 ">
                  <span className="text-lg text-black mx-auto"> Skills </span>
                </div>

                <div className="carousel-item  flex justify-between">
                  <button
                    className="btn btn-outline btn-error mx-auto px-2"
                    onClick={handleClick }
                  >
                    {/* <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <div className="flex justify-between">
                          {" "}
                          <h3 className="font-bold text-lg text-red-300 mt-5 pt-3">
                            Skills
                          </h3>
                          <div className="modal-action">
                            <form method="dialog ">
                              <button className=" btn"> ✖</button>
                            </form>
                          </div>
                        </div>
                        <div class="border-t-2 border-blue-500 w-full mx-auto my-8"></div>
                        <label className="text-lg  font-medium text-red-300">
                          Do you have experience in UI?{" "}
                          <span className=" text-red-500">*</span>
                        </label>

                        <div className="flex justify-center w-full  my-3 ">
                          <button className=" px-24 btn btn-outline btn-success mx-auto">
                            Yes
                          </button>
                          <button className=" px-24 btn btn-outline btn-primary">
                            No
                          </button>
                        </div>
                        <label className="text-lg  font-medium text-red-300 ">
                          Years of experience (optional)
                        </label>
                        <ExperienceDropdown></ExperienceDropdown>

                        <div className="flex justify-center">
                          <button className="btn btn-outline btn-primary font-semibold text-base mx-3">
                            Save
                          </button>

                          <button className="btn btn-outline font-semibold text-base  ">
                            Cancel{" "}
                          </button>
                        </div>
                      </div>
                    </dialog> */}
                    <DialogBox2 handleClick={handleClick}></DialogBox2>
                    <h1 className="text-black font-bold text-lg ">UI</h1>
                    <span className="text-black">(required)</span>
                  </button>


                  <button className="btn btn-outline btn-error mx-auto px-2 "  onClick={() =>
                      document.getElementById("my_modal_1").showModal()}>
                        {/* <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <div className="flex justify-between">
                          {" "}
                          <h3 className="font-bold text-lg text-red-300 mt-5 pt-3">
                            Skills
                          </h3>
                          <div className="modal-action">
                            <form method="dialog ">
                              <button className=" btn"> ✖</button>
                            </form>
                          </div>
                        </div>
                        <div class="border-t-2 border-blue-500 w-full mx-auto my-8"></div>
                        <label className="text-lg  font-medium text-red-300">
                          Do you have experience in UI?{" "}
                          <span className=" text-red-500">*</span>
                        </label>

                        <div className="flex justify-center w-full  my-3 ">
                          <button className=" px-24 btn btn-outline btn-success mx-auto">
                            Yes
                          </button>
                          <button className=" px-24 btn btn-outline btn-primary">
                            No
                          </button>
                        </div>
                        <label className="text-lg  font-medium text-red-300 ">
                          Years of experience (optional)
                        </label>
                        <ExperienceDropdown></ExperienceDropdown>

                        <div className="flex justify-center">
                          <button className="btn btn-outline btn-primary font-semibold text-base mx-3">
                            Save
                          </button>

                          <button className="btn btn-outline font-semibold text-base  ">
                            Cancel{" "}
                          </button>
                        </div>
                      </div>
                      
                    </dialog> */}
                    <DialogBox2></DialogBox2>
                    <h1 className="text-black font-bold text-lg ">Redux</h1>
                    <span className="text-black">(required)</span>
                  </button>
                  <button className="btn btn-outline btn-error mx-auto">
                    <h1 className="text-black font-bold text-lg ">
                      Communication Skills
                    </h1>
                    <span className="text-black">(required)</span>
                  </button>
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
