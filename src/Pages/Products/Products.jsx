import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Icon } from "@iconify/react";

import ItemsCard from './ItemsCard';

const Products = () => {
  const allProducts = useLoaderData()
  console.log(allProducts);

  const navigate = useNavigate()

  const sneakerss = allProducts.filter(products => products.category === "Men's Sneaker")
  const pants = allProducts.filter(products =>  products.category === "Men's Pants")
  const boots = allProducts.filter(products =>  products.category === "Men's Boot")
  const bags = allProducts.filter(products =>  products.category === "Bag")
  const caps = allProducts.filter(products =>  products.category === "Cap")
  const earphones = allProducts.filter(products =>  products.category === "Earphones")
  const bottles = allProducts.filter(products =>  products.category === "Bottle")
  
  console.log(pants);
  return (
  <div className='container mx-auto mt-10'>
      <button onClick={()=>navigate(-1)} className="text-4xl py-10"><Icon icon="emojione-monotone:down-arrow" rotate={1} /></button>
      <div 
      className=' bg-zinc-200 px-4 rounded-lg'
    >
      <Tabs>
     <TabList className=" bg-black text-white p-2 rounded-lg  flex justify-around ">
      <Tab ><p className='rounded-lg flex justify-center items-center'>Men's Sneaker</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Men's Pants</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Men's Boot</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Bag</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Cap</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Earphones</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Bottle</p></Tab>

      
    </TabList>

    <TabPanel>
       <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
       {
            sneakerss.map(items => <ItemsCard items={items} key={items._id}/>)
          }
       </div>
    </TabPanel>

    <TabPanel>
 

    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
          {
            pants.map(items => <ItemsCard items={items} key={items._id}/>)
          }
       </div>
     

    </TabPanel>
    <TabPanel>
 

    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
          {
            boots.map(items => <ItemsCard items={items} key={items._id}/>)
          }
       </div>
     

    </TabPanel>
    <TabPanel>
 

    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
          {
            bags.map(items => <ItemsCard items={items} key={items._id}/>)
          }
       </div>
     

    </TabPanel>
    <TabPanel>
 

    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
          {
            caps.map(items => <ItemsCard items={items} key={items._id}/>)
          }
       </div>
     

    </TabPanel>
    <TabPanel>
 

    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
          {
            earphones.map(items => <ItemsCard items={items} key={items._id}/>)
          }
       </div>
     

    </TabPanel>
    <TabPanel>
   

    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
          {
            bottles.map(items => <ItemsCard items={items} key={items._id}/>)
          }
       </div>
     

    </TabPanel>

   </Tabs>
      
    </div>
  </div>
  );
};

export default Products;