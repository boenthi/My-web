'use client';
import { motion } from 'framer-motion';
// import Phone from './Phone';
import PhoneTwo from './Phonetwo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';

import { useInView } from 'react-intersection-observer'; 

const MyCarousel = () => {
  const slides = [
    {
      id: 1,
      imageUrl: <PhoneTwo/>,
      altText: '/',
      style: {
        padding: '20px',
        borderRadius: '10px',
      },
      animation: {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },

      },
    },
  
  ];

  const { ref, inView } = useInView({

    threshold: 1, //  Adjust threshold as needed.  0.2 means 20% of the element is in view.
    triggerOnce: true,  // Only trigger the animation once
  });

  return (
    <div ref={ref}> {/* Wrap Swiper with a div and attach the ref */}

      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        spaceBetween={'100%'}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        mousewheel={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease-in-out" }} // Make the Swiper itself fade in
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              style={slide.style}
              variants={slide.animation}
              initial="initial"
              animate={inView ? "animate" : "initial"}  // Trigger animation based on inView
              exit="exit"
            >
              {slide.imageUrl}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default MyCarousel;
