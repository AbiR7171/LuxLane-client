import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Banner1 from "../../assets/Images/Banner/banne1.jpg"
import Banner2 from "../../assets/Images/Banner/banner4.jpg"
import Banner3 from "../../assets/Images/Banner/banner3.jpg"
import Banner4 from "../../assets/Images/Banner/banner2.jpg"

const Banner = () => {
  return (
    <div
      className="mt-4"
    >
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

        <SwiperSlide>
           
           <img src={Banner1}  className="w-11/12 mx-auto rounded-lg" alt="" />
            <div 
             className="absolute top-1/3 left-32 fontPrimary  font-bold space-y-9"
            >
                 <h2 className="text-6xl text-white">Everyday Low Price</h2> 
                 

                 <div className="text-7xl text-red-600">
                 <p>With Unconditional</p> 
                 <p>Free Delivery</p>
                 </div>

            </div>
           

        </SwiperSlide>
        <SwiperSlide>
              
        <img src={Banner4}  className="h-[690px] w-11/12 mx-auto rounded-lg" alt="" />
            <div 
             className="absolute top-1/3 left-32 fontPrimary  font-bold space-y-9"
            >
                 <h2 className="text-8xl text-white">30% off Day</h2> 
                

            </div>

        </SwiperSlide>
        <SwiperSlide>


        <img src={Banner3}  className="h-[690px] w-11/12 mx-auto rounded-lg" alt="" />
            <div 
             className="absolute top-1/3 right-20 fontPrimary  font-bold space-y-9"
            >
                 <h2 className="text-7xl text-white">Brand Day</h2> 
                 

                 <div className="text-7xl text-red-600">
                 <p>50% off Day</p> 
                 <p>Unconditional snipping</p>
                 </div>

            </div>


        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
