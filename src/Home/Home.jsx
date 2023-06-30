import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Advertisment from "../advertisment/advertisment"



function Home(){


    return(

        <>
           <Navbar/>

        <section >
            
                
                    <Advertisment/>
               
            
        </section > 
           
        <section>
            <Footer/>

        </section>
        </>
    )
}

export default Home