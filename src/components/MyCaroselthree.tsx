"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import PhoneThree from '@/components/PhoneThree';
import { useInView } from 'react-intersection-observer'; // Import hook
import { motion } from 'framer-motion'; // Import framer-motion

const MyCarouselthree = () => {
  const slides = [
    {
      id: 1,
      imageUrl: <PhoneThree />,
      altText: 'My Carousel Image 1',
      animation: {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }, 
        exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }, 
      },
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,  
  });

  return (
    <div ref={ref}> 
      {/* style={{ }}    Wrap with the ref */}
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Autoplay]}
        spaceBetween={'100%'}
        slidesPerView={1}
        pagination={{ clickable: true }}
        mousewheel={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        style={{ opacity: inView ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              variants={slide.animation}
              initial="initial"
              animate={inView ? "animate" : "initial"}
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

export default MyCarouselthree;
