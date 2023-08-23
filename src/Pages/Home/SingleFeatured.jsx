import React, { useContext, useRef, useState } from "react";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { Icon } from "@iconify/react";
import axios from "axios";
import { AuthContext } from "../../Routes/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const SingleFeatured = () => {

          const {user}=useContext(AuthContext)
           const SingleProduct = useLoaderData();
           console.log(SingleProduct);

           const [cart, refetch]=useCart()

       const[quantity, setQuantity]=useState(1)
       const [ isDisable, setIsDisable]=useState(false);


       const totalPrice = SingleProduct[0].price * quantity ;

     

      //  console.log(quantity);

      //  console.log(user);


      //  const quantityRef = useRef(0) 
       
      //  const quantityValue = quantityRef.current.textContent;

      //  console.log(quantityValue);

      


       const handlePlusQuantity=()=>{

               setQuantity(quantity + 1);
       }

       const handleMinusQunatity= ()=>{
                    

                   
                     if(quantity > 1){
                      setQuantity(quantity -1);
                     }

                    

                     
                      
       }

       


    const handleAddToCart = ()=>{
       

      
           axios.post("http://localhost:5000/carts",
           {
                 userName: user.displayName,
                 email : user.email,
                 productName: SingleProduct[0].name,
                 productImg: SingleProduct[0].img,
                 seller: SingleProduct[0].seller,
                 productId: SingleProduct[0]._id,
                 quantity: quantity,
                 price: SingleProduct[0].price,
                 stock: SingleProduct[0].stock,
                 totalPrice: totalPrice
           })
           .then(res => {

             console.log(res);
              if(res.data.insertedId){
                refetch()
                Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: 'Item added to Cart',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
           })
           .catch(error =>{
             console.log(error);
           })

    }

  return (
    <div className="mt-20 bg-stone-100 rounded-lg container mx-auto">
      {SingleProduct.map((product) => {
        return (
          <div className="flex  items-center fontPrimary gap-6 rounded-lg ">
            <img src={product.img} className="rounded-lg w-1/2" alt="" />

            <div className="space-y-2">
              <p className="font-bold fontPrimary text-3xl ">{product.name}</p>
              <p className="text-2xl font-semibold">
                {" "}
                Brand: <span className="text-gray-600">{product.seller}</span>
              </p>

              <p className="text-2xl font-semibold">
                Price: <span className="text-gray-600">$ {product.price}</span>
              </p>

              <p className="text-2xl font-semibold">
                Shipping:{" "}
                <span className="text-gray-600">{product.shipping}</span>
              </p>

              <p className="text-2xl font-semibold">
                stock: <span className="text-gray-600">{product.stock}</span>
              </p>

              <p>
                <Rating
                  readonly
                  placeholderRating={product.ratings}
                  emptySymbol={
                    <Icon
                      icon="mdi:star-outline"
                      className="text-yellow-600 text-4xl"
                    />
                  }
                  placeholderSymbol={
                    <Icon
                      icon="mdi:star"
                      className="text-yellow-600 text-4xl"
                    />
                  }
                  fullSymbol={
                    <Icon
                      icon="mdi:star"
                      className="text-yellow-600 text-4xl"
                    />
                  }
                />
              </p>  

              <p className="text-2xl font-semibold">
                Total Ratings: <span className="text-gray-600">{product.ratingsCount}</span>
              </p> 

             <div className="flex gap-2 items-center ">

              <p className="flex items-center border-2  p-2">
                 <span>Quantity</span>
                   <button   onClick={handleMinusQunatity}>    <Icon icon="dashicons:arrow-up" rotate={3} /> </button>
                  <span  className="text-3xl">{quantity}</span>
                  <Icon onClick={handlePlusQuantity} icon="dashicons:arrow-up" rotate={1} />
                  
                   </p>

             <button onClick={handleAddToCart} className="btn bg-red-600 text-white">ADD TO CART <Icon icon="mdi:cart" className="text-2xl" /></button>

             </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleFeatured;
