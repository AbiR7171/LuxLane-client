import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Rating from 'react-rating';

const ItemsCard = ({items}) => {
    return (
        <div>
        <div className="card w-96 h-[500px] bg-base-100 shadow-xl  fontPrimary">
             <figure>
               <img src={items.img} alt="Shoes" />
             </figure>
             <div className="card-body">
               <h2 className="card-title">
                 {items.name}
                 <div className="badge badge-secondary">
                   {" "}
                   ${items.price}
                 </div>
               </h2>
               <p>
                 <Rating
                  readonly
                   placeholderRating={items.ratings}
                   emptySymbol={
                     <Icon icon="mdi:star-outline" className="text-yellow-600 text-2xl" />
                   }
                   placeholderSymbol={
                     <Icon icon="mdi:star" className="text-yellow-600 text-2xl" />
                   }
                   fullSymbol={ 
                     <Icon icon="mdi:star" className="text-yellow-600 text-2xl" />
                   }
                 />
               </p>
               <div className="card-actions justify-end">
                 <Link to={`/singleFeatured/${items._id}`}>
                   <div className=" fontSize flex items-center gap-2 badge badge-outline p-3">
                     {" "}
                     view details <Icon icon="clarity:details-solid" />
                   </div>
                 </Link>
               </div>
             </div>
           </div>
      
       
   </div>
    );
};

export default ItemsCard;