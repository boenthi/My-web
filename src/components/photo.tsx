// import { useNavigate } from "react-router-dom";
// import logo from "../asset/logo.png";


import logo from "../asset/logo.png"; // Keep this line

 export function Logo() {
  return (
    <img
      src={logo.src} // Access the src property of the imported image
      alt="logo"
   
      className="h-full w-full cursor-pointer object-cover"
        style={{
        width: '50px',      
        height: '30px',    
        //  borderRadius: '50%', // Make it a circle
        // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a shadow
      }}
    />
  );
}

export default Logo;

