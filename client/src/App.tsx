// import React, { useState } from "react";
// import JobManager from "./components/JobManager";
import Navbar from "./components/Navbar";
import Navi from "./components/Navi";
import Header from "./components/Header";
import ListJobs from "./components/ListJobs";

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center apsolute h-[100%] w-[100%]  ">
        <div className="w-[40%] ">
          <Header></Header>
          <div className="flex justify-center items-center">
            <Navbar></Navbar>
          </div>
          <br />
          <div className="flex justify-center h-[100px] mb-[20px]  items-center">
            <Navi></Navi>
          </div>
          <div className="flex justify-center items-center">
            <ListJobs></ListJobs>
          </div>
        </div>
      </div>
    </>
  );
}
