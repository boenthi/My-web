"use client";
import { Button } from "flowbite-react";
// import { NavbarComponent } from "@/components/Navbar;
import { FooterComponent } from "@/components/Footer";
import MyCarousel from "@/components/MyCarousel ";
import NavbarComponent from"@/components/Navbar";
// import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import MyCarouselTwo from "@/components/MyCarouselTwo";
import MyCarouselthree from "@/components/MyCaroselthree";
import { BsChevronCompactRight } from "react-icons/bs";

import { useRouter } from 'next/navigation';

export default function Page() {
 const router = useRouter();
{
    return (
        <div className="flex flex-col min-h-screen ">
            <NavbarComponent />
            <main className="flex-grow justify-content-center"> 
                <section className="py-12 bg-gray-100"> 
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> 
                        <div className="text-content px-4" data-aos="fade-right"> 
                            <h2 className="text-1xl font-bold mb-4"> 
                                Car Inspection & Valuation, Made Easy
                            </h2>
                            <h2 className="text-gray-700 leading-relaxed mb-6 text-1xl"> {/* Improved text styling */}
                                Need a quick check or a full car review? We're here to help you understand your car's value, step by step.
                            </h2>
                              <button    onClick={() => router.push('#')} className=" ml-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center" >
                                Download  <BsChevronCompactRight  /> 
                            </button> 
                            
                        </div>
                        <div className="image-container">
                            <MyCarousel />
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
               <section className="py-12 bg-gray-300">
                   <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="image-container order-first md:order-none">
                        <div>
                         <MyCarouselTwo />
                             </div>
                   </div>
                  <div data-aos="fade-left" className="text-content px-4">
                     <h2 className=" font-semibold mt-11 text-2xl">
                         Share Your Car Details in Minutes
                     </h2>
                  <h2 className="text-gray-700  mt-11 text-xs">
                  Provide basic car and user details in just a few taps. We make it easy to submit accurate info for the most precise appraisal.
                 </h2>
                 </div>
                </div>
             </section>
                
                <section className="py-12">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-content px-4" data-aos="fade-right">
                            <h2 className="text-3xl font-semibold mb-4"> 
                                Car Inspection & Valuation, Made Easy
                            </h2>
                            <h2 className="text-gray-700 leading-relaxed">
                                Need a quick check or a full car review? We're here to help you understand your car's value, step by step.
                            </h2>
                        </div>
                        <div className="image-container">
                            <MyCarousel />
                        </div>
                    </div>
                </section>

               
                <section className="py-12 bg-gray-300" >
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="image-container">
                            <MyCarouselthree />
                        </div>
                        <div className="text-content px-4 "  data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <h2 className="text-3xl font-semibold mb-4"> 
                                Car Inspection & Valuation, Made Easy
                            </h2>
                            <h2 className="text-gray-700 leading-relaxed">
                                Need a quick check or a full car review? We're here to help you understand your car's value, step by step.
                            </h2>
                        </div>
                    </div>
                </section>

                {/* Section 5 */}
                <section className="py-12">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-content px-4"  data-aos="fade-up"data-aos-anchor-placement="bottom-bottom">
                            <h2 className="text-3xl font-semibold mb-4"> {/* Sub-heading */}
                                Share Your Car Details in Minutes
                            </h2>
                            <h2 className="text-gray-700 leading-relaxed">
                                Provide basic car and user details in just a few taps. We make it easy to submit accurate info for the most precise appraisal.
                            </h2>
                        </div>
                        <div className="image-container">
                            <MyCarouselthree />
                        </div>
                    </div>
                </section>

            </main>

            <FooterComponent />
        </div>
    );
}
}