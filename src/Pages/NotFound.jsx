import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{ height: 1000, position: "fixed", top: 0 }}
      className="bg-dark w-100 text-white "> 
       <h1 style={{marginTop:200, fontSize:68, marginBottom:20}}>404</h1>
       <h1>Not Found</h1>
      <button onClick={()=>{navigate("/")}} className="d-flex mx-auto px-5 py-2 mt-4 bg-primary text-white  border border-0 rounded-2">Home Page</button>
    </div> 
  );
}

export default NotFound;
