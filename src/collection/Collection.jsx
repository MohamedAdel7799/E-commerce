import axios from "axios";
import React, { useEffect, useState } from "react";

function Collection(){
const [data,setdata]=useState([]);
useEffect(()=>{

  axios.get(' ').then( response =>{
      console.log(response.data)   
      setdata(response.data)

   })} ,[])



    return(
        <>
        <div className="container d-flex  justify-content-center mt-5" >
            <h5>Our Top Collection </h5>

        </div>
        <div>
            <ul class="nav justify-content-center mt-3 col-sm-12">
                <li class="nav-item mx-1">
                    <a class="nav-link active text-dark " aria-current="page" href="{}">Featuerd</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link text-dark " href="{}">Popualr</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link text-dark " href="{}">Sale</a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link text-dark " href="{}">Beast rated</a>
                </li>
            </ul>
        </div>
        <div className="slider">

    
            
        </div>
         
          
        
        </>
    )
}

export default Collection;
