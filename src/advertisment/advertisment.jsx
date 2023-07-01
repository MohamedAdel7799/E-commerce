import React from "react";
import "./advertisment.css";


function Advertisment(){


    return(
        <>

        <div className="row page-ads d-flex mx-auto mt-2  w-75 ">

            <img src={require('./03-25-20-SALE-Hero-Image_-_1300x433_-_300ppi_1600x.jpg')}></img>

        </div>



        <div className="categories-title d-flex justify-content-center mt-5">
           <h5>Top Categories</h5>

        </div>

        <div className="container mt-4">
        <div className="row mx-auto ads ">
        
                <div className="col-lg   text-center ">
                    <div className="   " >
                        <img  src={require('./png-transparent-handbag-tote-bag-fashion-woman-women-s-handbags-zipper-white-luggage-bags-thumbnail.png')}  ></img>
                    </div>
                    <p>Handbags</p>
                </div>
                <div className="col-lg   text-center">
                <div>
                        <img src={require('./pngtree-line-drawing-clothes-decoration-illustration-png-image_4717718.jpg')}></img>
                    </div>
                    <p>Clothings</p>
                </div>
                <div className="col-lg   text-center">
                <div>
                        <img src={require('./png-transparent-black-and-red-zip-up-jacket-t-shirt-jacket-red-jacket-zipper-cuff-outfitpost-thumbnail.png')}></img>
                    </div>
                    <p>Jackets</p>
                </div>
                <div className="col-lg   text-center">
                <div>
                        <img src={require('./png-transparent-hublot-automatic-watch-jewellery-movement-it-039-s-a-girl-watch-accessory-retail-accessories-thumbnail.png')}></img>
                    </div>
                    <p>Watches</p>
                </div>
                <div className="col-lg  text-center">
                <div>
                        <img src={require('./png-transparent-dress-fashion-designer-women-s-dresses-holidays-women-accessories-fashion-thumbnail.png')}></img>
                    </div>
                    <p>Dresses</p>
                </div>
                <div className="col-lg   text-center">
                <div>
                        <img src={require('./png-transparent-sneakers-new-balance-shoe-sportswear-clothing-cloth-shoes-blue-outdoor-shoe-sneakers-thumbnail.png')}></img>
                    </div>
                    <p>Shoses</p>
                </div>
                <div className="col-lg   text-center">
                <div>
                        <img src={require('./png-transparent-jeans-pants-jeans-white-hand-black-thumbnail.png')}></img>
                    </div>
                    <p>Jeans</p>
                </div>
                <div className="col-lg   text-center ">

                <div>
                        <img src={require('./png-transparent-polo-shirt-t-shirt-pique-lacoste-polo-shirt-tshirt-teal-active-shirt-thumbnail.png')}></img>
                    </div>
                    <p>Shirt</p>
                </div>

            </div>

        </div>
        
    
        
        
      




        
        </>
    )
}


export default Advertisment;

