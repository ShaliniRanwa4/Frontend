import React from 'react'

const SearchBar = () => {
  return (
    <div>
          <div className="   w-2/4  mx-auto   z-10 ">
          <label className="input input-bordered flex items-center gap-2 bg-stone-800">
            <input
              type="text"
              className="grow text-white font-medium"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 font-extrabold opacity-70 text-white "
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        {/* <div class="border-t-2 border-blue-500 w-full mx-auto mt-28"></div> */}
    </div>
  )
}

export default SearchBar