"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import PhoneThree from './PhoneThree';
const MyCarouselthree = () => {
  const slides = [
    { id: 1, imageUrl: <PhoneThree />, altText: 'My Carousel Image 1' },
    ];
    //

  return (
     <div style={{ //backgroundColor: 'lightblue'
       }}> 
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
    </Swiper></div>
  );



}

export default MyCarouselthree;

