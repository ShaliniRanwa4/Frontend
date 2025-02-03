// import React from "react";

// const DialogBox = ({ handle2,handle3 }) => {


//   return (
//     <>
//      <dialog id="my_modal_2" className="modal">
//         <div className="modal-box">
//           <div className="flex justify-between">
//             {" "}
//             <h3 className="font-bold text-lg mt-5 pt-3">
//             Add education
//             </h3>
//             <div className="modal-action">
//   <form method="dialog">
//     <button type="submit" className="btn">✖</button>
//   </form>
// </div>
//           </div>
//           <div class="border-t-2 border-blue-500 w-full mx-auto my-8"></div>
//           <label className="text-lg  font-medium ">
//             Job title <span className=" text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder=""
//             className="input input-bordered w-full mt-2 mb-5 "
//           />
//           <label className="text-lg  font-medium ">Company Name</label>
//           <input
//             type="text"
//             placeholder=""
//             className="input input-bordered w-full mt-2 mb-5 "
//           />

//           <div className="flex justify-center">
//             <button className="btn btn-outline btn-primary font-semibold text-base mx-3">
//               Save
//             </button>

//             <button className="btn btn-outline font-semibold text-base  ">
//               Cancel{" "}
//             </button>
//           </div>
//         </div>
//       </dialog>
      
      
//       <dialog id="my_modal_3" className="modal">
//       <div className="modal-box">
//         <div className="flex justify-between">
//           {" "}
//           <h3 className="font-bold text-lg mt-5 pt-3">
//           Add Skill
//           </h3>
//           <div className="modal-action">
//   <form method="dialog">
//     <button type="submit" className="btn">✖</button>
//   </form>
// </div>
//         </div>
//         <div class="border-t-2 border-blue-500 w-full mx-auto my-8"></div>
//         <label className="text-lg  font-medium ">
//           Job title <span className=" text-red-500">*</span>
//         </label>
//         <input
//           type="text"
//           placeholder=""
//           className="input input-bordered w-full mt-2 mb-5 "
//         />
//         <label className="text-lg  font-medium ">Company Name</label>
//         <input
//           type="text"
//           placeholder=""
//           className="input input-bordered w-full mt-2 mb-5 "
//         />

//         <div className="flex justify-center">
//           <button className="btn btn-outline btn-primary font-semibold text-base mx-3">
//             Save
//           </button>

//           <button className="btn btn-outline font-semibold text-base  ">
//             Cancel{" "}
//           </button>
//         </div>
//       </div>
//     </dialog>
    
//     </>

    
//   );
// };

// export default DialogBox;



import React from "react";

const DialogBox = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-base-300 p-6 rounded-lg shadow-lg w-[400px]">
        {/* Header */}
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-xl font-bold">✖</button>
        </div>
        <div className="border-t-2 border-blue-500 w-full mx-auto my-4"></div>

        {/* Content */}
        <div>{children}</div>

        {/* Buttons */}
        <div className="flex justify-center mt-4">
          <button className="btn btn-outline btn-primary mx-3">Save</button>
          <button onClick={onClose} className="btn btn-outline">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;

