"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import PhoneTwo from './Phonetwo';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const MyCarouselTwo = () => {
  const slides = [
    {
      id: 1,
      imageUrl: <PhoneTwo />,
      altText: 'My Carousel Image 1',
      animation: {
        initial: { opacity: 0, x: -100 }, // Start off-screen to the left
        animate: { opacity: 1, x: 0, transition: { duration: 0.5 ,type: "spring", stiffness: 100, damping: 15 } }, // Fade in and move to original position
        exit: { opacity: 0, x: 100, transition: { duration: 0.5 } }, // Move off-screen to the right
      },
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref}  >
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

export default MyCarouselTwo;
