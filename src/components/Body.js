import React from "react";

import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Profile from "./Profile";




const Body = () => {
  return (
    <div className="">
      
        <Navbar></Navbar>
        <Outlet></Outlet>
        {/* <Profile></Profile> */}
        <Footer></Footer>
        
    </div>
  );
};

export default Body;
