// Footer.tsx
import {
  Footer,
  // FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import Logo from "./Logo";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
export function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div>
             <Logo />
             <p className="mt-5">Office 73C, St.598, Sangkat Toul Sounke, Khan Russey Keo , Phnom Penh, Cambodia</p>
           </div>  
              
          <div className="">
              <h2 className="flex items-center">Contact Us</h2>
              <h5 className=" flex items-center mt-5 gap-5"><FiPhone className=" text-sky-700 " /><span>071 444 408 3</span></h5>
              <h5 className="flex items-center gap-5"><FiPhone className="text-sky-700"/>099 999 993</h5>
              <h5 className="flex items-center gap-5 "> <MdOutlineEmail className="text-sky-700"/>eminfo@dgsuperapp.com</h5>
            </div>

          <div >
             <div  >  
              <h1 className="flex items-center">Let's do it!</h1>
              <FooterLinkGroup>
              <FooterLink href="https://www.facebook.com/"><FaFacebook className=" text-sky-600  text-3xl mt-7"/> </FooterLink>
              <FooterLink href="https://web.telegram.org/k/"><FaTelegram className=" text-sky-600  text-3xl mt-7"/></FooterLink>
              </FooterLinkGroup>
          </div>
        </div>
    </div>
          
        
        <FooterDivider />
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div><FooterCopyright href="#" by="DG App. All rights reserved." year={2025} /> </div>
          <div className="flex items-center">
            <FooterLink href="#" className="text-xs list-none indent-4 md:indent-8">Privacy Policy</FooterLink>
             <span className="mx-2">|</span> 
            <FooterLink href="#" className="text-xs list-none">Terms & Conditions</FooterLink>
          </div>
        </div>
       
      </div>
    </Footer>
  );
}

