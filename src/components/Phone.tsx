import phone from "../asset/phone.png";
import { motion } from "framer-motion"; // Add this import

export default function Phone() {
    const variants = {
        hidden: {
            x: 50,
            opacity: 0,
        },
        visible: {
            x: 0,
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
                padding:'50px'
                // padding: '100px', // consider removing this padding
            }}
            variants={variants}
            initial="hidden"
            animate="visible"
        />
    );
}


