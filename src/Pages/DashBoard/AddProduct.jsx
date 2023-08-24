import React, { useContext } from 'react';
import { AuthContext } from '../../Routes/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const {user}=useContext(AuthContext)



           const handleProductForm = event =>{

                     event.preventDefault()
                     const form = event.target;
                     const email = form.useremail.value;
                     const productName = form.name.value;
                     const seller = form.seller.value;
                     const price = form.price.value;
                     const category = form.category.value;
                     const ratings = form.ratings.value;
                     const ratingsCount = form.ratingsCount.value;
                     const img = form.img.value;
                     const shipping = form.shipping.value;
                     const stock = form.stock.value;

                     console.log(email, productName, seller, price, category, ratings, ratingsCount,  img, shipping, stock);

                     axios.post("http://localhost:5000/products", {
                        email, productName, seller, price, category, ratings, ratingsCount, img,
                        shipping, stock
                     })
                     .then(data =>{
                        console.log(data);
                        if(data.data.insertedId){
                            form.reset()
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Product added',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                     })
                    
           }
    return (
        <div className='bg-zinc-200 w-full h-full'>
    <div className="max-w-md mx-auto p-4 fontPrimary ">
      <h2 className="text-2xl mb-4 text-center">Product Form</h2>
      <form  onSubmit={handleProductForm} className='grid grid-cols-2 gap-2'>
        <div className="mb-4">
          <label htmlFor="useremail" className="block mb-1">
            User Email:
          </label>
          <input
          value={user?.email}
            type="email"
            id="useremail"
            name="useremail"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
           Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="seller" className="block mb-1">
            Seller:
          </label>
          <select
            id="seller"
            name="seller"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          >
            <option value="seller1">Addidas</option>
            <option value="seller2">Fila</option>
            <option value="seller3">Nike</option>
            <option value="seller3">Under Armour</option>
            <option value="seller3">Champion</option>
            <option value="seller3">Lulu Lemon Athletica</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-1">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-1">
            Category:
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          >
            <option value="Bottle">Bottle</option>
            <option value="Men's Sneaker">Men's Sneaker</option>
            <option value="Men's Pants">Men's Pants</option>
            <option value="Men's Boot">Men's Boot</option>
            <option value="Bag">Bag</option>
            <option value="Cap">Cap</option>
            <option value="Earphones">Earphones</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="ratings" className="block mb-1">
            Ratings:
          </label>
          <input
            type="number"
            id="ratings"
            name="ratings"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ratingsCount" className="block mb-1">
            Ratings Count:
          </label>
          <input
            type="number"
            id="ratingsCount"
            name="ratingsCount"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="img" className="block mb-1">
            Image:
          </label>
          <input
            type="input"
            id="img"
            name="img"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shipping" className="block mb-1">
            Shipping:
          </label>
          <input
            type="text"
            id="shipping"
            name="shipping"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block mb-1">
            Stock:
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2  col-span-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>      
            
        </div>
    );
};

export default AddProduct;