import phone from "../asset/phone.png";
import { motion } from "framer-motion"; // Add this import

export default function PhoneTwo() {
    const variants = {
        hidden: {
            y: 50, // Change x to y, start 50px from the bottom
            opacity: 0,
        },
        visible: {
            y: 0,  // Move to the original position (top)
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 110,
            },
        },
    };

    return (
        <motion.img
            src={phone.src}
            alt="phone"
            className="h-full w-full cursor-pointer object-cover"
            style={{
                width: 'auto',
                height: 'auto',
                padding:'50px',
                // background-color:'',
                // padding: '100px', // consider removing this padding
            }}
            variants={variants}
            initial="hidden"
            animate="visible"
        />
    );
}

