// PhoneThree.tsx
import phone from "../asset/phone.png";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const PhoneThree = () => {
    const phoneVariants = {
        hidden: { y: '20vh', opacity: 0 }, // Start off-screen from bottom (relative to viewport height)
        visible: {
            y: 0,             // Move to its normal position
            opacity: 1,        // Fade in
            transition: {
                type: "spring",
                stiffness: 80,  // Adjust spring values
                damping: 12,
                duration: 0.65, // Adjust duration
            },
        },
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.img
            ref={ref}
            src={phone.src}
            alt="Animated Phone"
            className="h-full w-full cursor-pointer object-cover"
            style={{
                width: 'auto',
                height: 'auto',
                padding:'50px'
            }}
            variants={{phoneVariants}}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        />
    );
};

export default PhoneThree;

