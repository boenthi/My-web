// app/page.tsx
import { Button } from "flowbite-react";
// import { NavbarComponent } from "@/components/Navbar;
import { FooterComponent } from "@/components/Footer";
import MyCarousel from "@/components/MyCarousel "
import NavbarComponent from"@/components/Navbar";
import { motion } from "framer-motion";
import { BsChevronCompactRight } from "react-icons/bs";
import MyCarouselTwo from "@/components/MyCarouselTwo";
import MyCarouselthree from "@/components/MyCaroselthree";
export default function Page() {
    const textVariants = {
        hidden: {
            x: 10,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };
    return (
      
        <div className="flex flex-col min-h-screen ">
            <NavbarComponent />
            <div className="flex-grow flex items-center justify-center">
                {/* Other content in the center, if any */}
            </div>

  {/* // phone */}

            <div className="container">
                <div className="text-content">
                    <h1>        
                        Car Inspection & Valuation, Made Easy
                    </h1>
                    <p>
                        Need a quick check or a full car review? We're here to help you understand your car's value, step by step.
                    </p>
                     <Button  href="" color="blue"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                         Download<BsChevronCompactRight className="mr-2 ml-2 h-5 w-5" /></Button>
                    </div>
                     <div className="image-container">
                       <MyCarousel />
                     </div>

            </div>
            {/* phonetwo */}
             <div className="container bg-amber-50">
               <div className="image-container"> 
                   <MyCarouselTwo/>  </div>
                 <div className="text-content">
                    <h3>        
                       Share Your Car Details in Minutes
                    </h3>
                    <h5>Provide basic car and user details in just a few taps. We make it easy to submit accurate info for the most precise appraisal.  </h5>
                    </div>
                  
          
         </div>
      
            <div className="container">
                <div className="text-content">
                    <h1>        
                        Car Inspection & Valuation, Made Easy
                    </h1>
                    <p>
                        Need a quick check or a full car review? We're here to help you understand your car's value, step by step.
                    </p>
                     </div>
                     <div className="image-container">
                       <MyCarousel />
                     </div>

            </div> 
             {/* //phone left torigth  or phone three*/}
            <div className="container bg-amber-50">
                <div className="image-container">
                       <MyCarouselthree />
                     </div>
                <div className="text-content">
                    <h1>        
                        Car Inspection & Valuation, Made Easy
                    </h1>
                    <p>
                        Need a quick check or a full car review? We're here to help you understand your car's value, step by step.
                    </p>
                     </div>
                     

            </div>
            {/* phone right but animation tbuttom to top */}
            <div className="container ">
               
                 <div className="text-content">
                    <h3>        
                       Share Your Car Details in Minutes
                    </h3>
                    <h5>Provide basic car and user details in just a few taps. We make it easy to submit accurate info for the most precise appraisal.  </h5>
                    </div>
                  <div className="image-container"> 
                   <MyCarouselTwo/>  </div>
          
         </div>
            
            <FooterComponent />
        </div>
        
    );
}

