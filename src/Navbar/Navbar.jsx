import React from "react";
import "./Navbar.css"
import { RxHeart,RxPerson } from "react-icons/rx";
import { BsCart,BsBorderWidth } from "react-icons/bs";


function Navbar(){

    return(
        <>
        <div className="containerfluid ">
           <div className=" d-flex justify-content-center bg-light message "> welcome </div>
           <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid d-flex ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span >{<BsBorderWidth/>}</span>
                    </button>
                    <a class="navbar-brand " href="{}">LOGO</a>                 

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="{}">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="{}">Shop</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active " href="{}">Collection</a>
                        </li>

                    </ul>
        
                    <ul class="navbar-nav mb-2 mb-lg-0 ">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="{}">LookBook</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="{}">Our World</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active " href="{}">Pages</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav mb-2 mb-lg-0 ">
                        <li class="nav-item">
                        <a class="nav-link active " href="{}">{<BsCart/>}</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="{}">{<RxHeart/>}</a>

                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" href="{}">{<RxPerson/>}</a>
                        </li>
                    </ul>        
                    </div>
                </div>

            </nav>
        </div>

   
     
        </>
    )
}


export default Navbar;
