import React from 'react'
import ExperienceDropdown from './ExperienceDropdown'

const DialogBox2 = (handleClick) => {
  return (

    <div>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
        
                            <div className="flex justify-between">
                              {" "}
                              <h3 className="font-bold text-lg text-red-300 mt-5 pt-3">
                                Skills
                              </h3>
                           <div className="modal-action">
  <form method="dialog">
    <button type="submit" className="btn">✖</button>
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
                          </dialog></div>


  )
}

export default DialogBox2