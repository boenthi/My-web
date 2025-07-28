import phone from "../asset/phone.png";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function PhoneTwo() {
    const variants = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 110,
                damping: 15,
                duration: 0.75,
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
            alt="phone"
            className="h-full w-full cursor-pointer object-cover"
            style={{
                width: 'auto',
                height: 'auto',
                padding:'50px',
            }}
            variants={{variants}}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        />
    );
}

