// PhoneThree.tsx
import phone from "../asset/phone.png";
import { motion } from "framer-motion"; 

const PhoneThree = () => {

    const phoneVariants = {
        hidden: { x: '-100%' }, // Start off-screen to the left
        visible: {
            x: 0,             // Move to the normal position
            transition: {
                type: "spring",   // Use spring animation
                stiffness: 100, // Adjust spring properties
                damping: 20,
            },
        },
    };

    return (
        <motion.img
            src={phone.src}
            alt="Animated Phone"
             className="h-full w-full cursor-pointer object-cover"
            style={{
                width: 'auto',
                height: 'auto',
                padding:'50px'}}
            variants={phoneVariants}
            initial="hidden"  // Start with the hidden state
            animate="visible" // Animate to the visible state
        />
    );
};

export default PhoneThree;
