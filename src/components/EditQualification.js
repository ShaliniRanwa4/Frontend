// import React from "react";
// import { Link } from "react-router-dom";
// import DialogBox from "./DialogBox";

// const EditQualification = () => {
//   const handleDialog2 = () => {
//     document.getElementById("my_modal_2").showModal();
//   };

//   const handleDialog3 = () => {
//     document.getElementById("my_modal_3").showModal();
//   };

//   return (
//     <div className="my-28">
//       <div className="w-1/3 container mx-auto    ">
//         <Link className="text-3xl my-2 text-white" to={"/profile"}>
//           🔙
//         </Link>
//         <h1 className="flex justify-start font-bold text-4xl text-white py-3 my-1">
//           Qualifications
//         </h1>
//         <span>
//           We use these details to show you jobs that match your unique skills
//           and experience.
//         </span>
//         <div
//           className="border-y border-blue-300 my-3 flex justify-between py-7  "
//           onClick={() => document.getElementById("my_modal_1").showModal()}
//         >
//           <dialog id="my_modal_1" className="modal">
//             <div className="modal-box">
//               <div className="flex justify-between">
//                 {" "}
//                 <h3 className="font-bold text-lg mt-5 pt-3">
//                   Add most recent work experience
//                 </h3>
                
//                 <div className="modal-action">
//                   <form method="dialog">
//                     <button type="submit" className="btn">
//                       ✖
//                     </button>
//                   </form>
//                 </div>
//               </div>
//               <div class="border-t-2 border-blue-500 w-full mx-auto my-8"></div>
//               <label className="text-lg  font-medium ">
//                 Job title <span className=" text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder=""
//                 className="input input-bordered w-full mt-2 mb-5 "
//               />
//               <label className="text-lg  font-medium ">Company Name</label>
//               <input
//                 type="text"
//                 placeholder=""
//                 className="input input-bordered w-full mt-2 mb-5 "
//               />

//               <div className="flex justify-center">
//                 <button className="btn btn-outline btn-primary font-semibold text-base mx-3">
//                   Save
//                 </button>

//                 <button className="btn btn-outline font-semibold text-base  ">
//                   Cancel{" "}
//                 </button>
//               </div>
//             </div>
//           </dialog>

//           <h3 className="font-bold text-lg text-blue-600 cursor-pointer">
//             Add most recent work experience{" "}
//           </h3>
//           <h3 className="text-xl  cursor-pointer">✙</h3>
//         </div>

//         <div
//           className="border-y border-blue-300 my-3 flex justify-between py-7"
//           onClick={handleDialog2}
//         >
//           <DialogBox handle2={handleDialog2}></DialogBox>
//           <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
//             Add education
//           </h3>
//           <h3 className="text-xl  cursor-pointer"> ✙</h3>
//         </div>
//         <div
//           className="border-y border-blue-300 my-3 flex justify-between py-7"
//           onClick={handleDialog3}
//         >
//           <DialogBox handle3={handleDialog3}></DialogBox>
//           <h3 className="font-bold text-lg text-blue-600  cursor-pointer ">
//             Add skill
//           </h3>
//           <h3 className="text-xl  cursor-pointer"> ✙</h3>
//         </div>
//         <div className="border-y border-blue-300 my-3 flex justify-between py-7">
//           <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
//             Add licence
//           </h3>
//           <h3 className="text-xl v"> ✙</h3>
//         </div>

//         <div className="border-y border-blue-300 my-3 flex justify-between py-7">
//           <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
//             Add certification
//           </h3>
//           <h3 className="text-xl  cursor-pointer"> ✙</h3>
//         </div>
//         <div className="border-y border-blue-300 my-3 flex justify-between py-7">
//           <h3 className="font-bold text-lg text-blue-600  cursor-pointer">
//             Add language
//           </h3>
//           <h3 className="text-xl  cursor-pointer"> ✙</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditQualification;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import DialogBox from "./DialogBox";
import SectionList from "./SectionList";

const EditQualification = () => {
  const [activeDialog, setActiveDialog] = useState(null); // Store active dialog

  // Sections with labels and unique keys
  const sections = [
    { key: "experience", label: "Add Work Experience" },
    { key: "education", label: "Add Education" },
    { key: "skills", label: "Add Skills" },
    { key: "certifications", label: "Add Certifications" },
    { key: "licenses", label: "Add Licenses" },
    { key: "languages", label: "Add Languages" },
  ];

  // Function to return content dynamically
  const renderDialogContent = () => {
    switch (activeDialog) {
      case "experience":
        return (
          <>
            <label className="text-lg font-medium">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
            <label className="text-lg font-medium">Company Name</label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
          </>
        );
      case "education":
        return  (
          <>
            <label className="text-lg font-medium">
            Level of education  <span className="text-red-500">*</span>
            </label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
            <label className="text-lg font-medium">Field of study</label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
          </>
        );
      case "skills":
        return  (
          <>
            <label className="text-lg font-medium">
            Skill   <span className="text-red-500">*</span>
            </label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
            <label className="text-lg font-medium">Years of experience</label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
          </>
        );
      case "certifications":
        return (
          <>
            <label className="text-lg font-medium">
            Certification name    <span className="text-red-500">*</span>
            </label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
            <label className="text-lg font-medium">Expiration date</label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
          </>
        );
      case "licenses":
        return (
          <>
            <label className="text-lg font-medium">
            Licence name    <span className="text-red-500">*</span>
            </label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
            <label className="text-lg font-medium">Expiration date</label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
          </>
        );
      case "languages":
        return (
          <>
            <label className="text-lg font-medium">
            Language    <span className="text-red-500">*</span>
            </label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
            <label className="text-lg font-medium">Proficiency *</label>
            <input type="text" className="input input-bordered w-full mt-2 mb-5" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="top-28">
      <div className="w-1/3 container mx-auto py-20">
        {/* Back Button */}
        <Link className="text-3xl my-2 text-white" to={"/profile"}>
          🔙
        </Link>
        <h1 className="flex justify-start font-bold text-4xl text-blue-500 py-3 my-1">
          Qualifications
        </h1>
        <span>
          We use these details to show you jobs that match your unique skills and experience.
        </span>

        {/* Section List */}
        <SectionList sections={sections} onSectionClick={setActiveDialog} />

        {/* Reusable Dialog Box */}
        <DialogBox
          isOpen={!!activeDialog}
          onClose={() => setActiveDialog(null)}
          title={sections.find((s) => s.key === activeDialog)?.label}
        >
          {renderDialogContent()}
        </DialogBox>
      </div>
    </div>
  );
};

export default EditQualification;
