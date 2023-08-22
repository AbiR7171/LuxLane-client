import React from "react";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { Icon } from "@iconify/react";

const SingleFeatured = () => {
  const SingleProduct = useLoaderData();
  console.log(SingleProduct);
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

              <button className="btn bg-red-600 text-white">ADD TO CART <Icon icon="mdi:cart" className="text-2xl" /></button>


            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleFeatured;
