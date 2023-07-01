import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Advertisment from "../advertisment/advertisment"
import Collection from "../collection/Collection"



function Home(){


    return(

        <>
           <Navbar/>

        <section >               
           <Advertisment/>                   
        </section > 
        <section>
            <Collection/>
            
        </section>
           


        <section>
            <Footer/>
        </section>
        </>
    )
}

export default Home