
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import SwiperCore, { EffectFade } from 'swiper';
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./slide.css"



const Slide = () => {

  
  return (
      <Swiper
      className='swiper'
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        speed={2000}
        pagination={{ clickable: true
         }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        
        
        //onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img className="slider" src="https://i.ibb.co/HxZT3Bg/negroni.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider" src="https://i.ibb.co/8K5fyfN/sazerac.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider" src="https://i.ibb.co/30B2BMj/white-russian.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider" src="https://i.ibb.co/hR2mNBy/aperol.jpg"></img>
        </SwiperSlide>
        ...
      </Swiper>
      
    
  );
};

export default Slide;
