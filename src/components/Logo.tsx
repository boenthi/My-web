// import { useNavigate } from "react-router-dom";
// import logo from "../asset/logo.png";

// function Logo() {
//   const navigate = useNavigate();
//   return (
//     <img
//       src={logo}
//       alt="logo"
//       className="h-full w-full cursor-pointer object-cover"
//       onClick={() => navigate("/")}
//     />
//   );
// }

// export default Logo;
// Logo.tsx (Simplified)
import logo from "../asset/logo.png"; // Keep this line

 export function Logo() {
  return (
    <img
      src={logo.src} // Access the src property of the imported image
      alt="logo"
   
      className="h-full w-full cursor-pointer object-cover"
        style={{
        width: '50px',      // Adjust as needed
        height: '30px',     // Adjust as needed
        //  borderRadius: '50%', // Make it a circle
        // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a shadow
      }}
    />
  );
}

export default Logo;

