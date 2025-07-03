"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import Phone from './Phone';
import { style } from 'framer-motion/client';
import PhoneTwo from './Phonetwo';

const MyCarousel = () => {
  const slides = [
    { id: 1, imageUrl: <Phone />, altText: '/' ,
       
            style: {
                // backgroundColor: 'lightblue', 
                padding: '20px',
                borderRadius: '10px' 
            }
    },
     
  ];
  return (
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
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          {slide.imageUrl}
        </SwiperSlide>
      ))}
    </Swiper>
  );



}

export default MyCarousel;

