import React from "react";
import VerticalCard from "./VerticalCard";
import CurrentOpenCard from "./CurrentOpenCard";
import SearchBar from "./SearchBar";


const AdminHomePage = () => {
  

  return (
    <div className="bg-white pt-32 px-10">
      <SearchBar></SearchBar>

      <div className="flex justify-between pt-28 ">
        <VerticalCard ></VerticalCard>
        <CurrentOpenCard></CurrentOpenCard>
      </div>
    </div>
  );
};

export default AdminHomePage;
