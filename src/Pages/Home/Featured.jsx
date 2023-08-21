import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Featured = () => {


    const[featured, setFeatured]=useState([])


    useEffect(()=>{

         axios.get("products.json")
         .then(data =>{
            console.log(data.data);
            const products = data.data
            const featured = products.filter(product => product.featured === true )
            console.log(featured);
            setFeatured(featured)
         })

    },[])



    return (
        <div>

            <h2 className="text-2xl ms-16 mt-10 fontPrimary">Featured Items</h2> 

            <div 
              className='container mx-auto px-20 mt-10'
            >

            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      > 

       {
                featured.map(feature => {
                    return   <SwiperSlide>Slide 1</SwiperSlide>
                })
       }

        

      </Swiper>

            </div>
            
        </div>
    );
};

export default Featured;