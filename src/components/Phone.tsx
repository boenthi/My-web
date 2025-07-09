import phone from "../asset/phone.png";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';  // Import the hook

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

    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.2, // Adjust as needed, the element comes into view when 20% of it is visible
    });

    return (
        <motion.img
            ref={ref} // Attach the ref to the image
            src={phone.src}
            alt="phone"
            className="h-full w-full cursor-pointer object-cover"
            style={{
                width: 'auto',
                height: 'auto',
                padding:'50px'
            }}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"} // Conditional animation based on inView
        />
    );
}

