import logo from "Assets/Images/logo.ico";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-screen gap-20 ">
      <div className="logo-img flex flex-col items-center justify-center h-[50vh]">
        <img className="h-[100%]" src={logo} alt="" />
      </div>
      <div className="flex">
        <div className="flex items-center justify-center flex-col text-center text-5xl mt-10 rounded-lg  font-semibold w-2/3 ">
          <h1 className="text-white w-2/3 ">
            BookShelf
            <br />
            <span className="text-warning">Your Personal Library And Social Network for Bookworms</span>
          </h1>
        </div>
        <div className="flex items-center justify-center  text-center ">
          <button class="btn btn-primary p-6 text-2xl text-white "><Link to='/signup' >register</Link> </button>
          <button class="btn btn-warning p-6 text-2xl mx-3 text-white "><Link to='/login'>login</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
