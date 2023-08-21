import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Icon } from '@iconify/react';

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
                    return   <SwiperSlide><div className="card w-96 h-[500px] bg-base-100 shadow-xl px-2 fontPrimary">
                    <figure><img src={feature.img} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {feature.name}
                        <div className="badge badge-secondary"> ${feature.price}</div>
                      </h2>
                      <p>Rating: {feature.ratings}</p>
                      <p>Company: {feature.seller}</p>
                      <div className="card-actions justify-end">
                        <div className=' fontSize flex items-center gap-2 badge badge-outline p-3' > view details <Icon icon="clarity:details-solid" /></div> 
                       
                      </div>
                    </div>
                  </div></SwiperSlide>
                })
       }

        

      </Swiper>

            </div>
            
        </div>
    );
};

export default Featured;