import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Products = () => {
  const allProducts = useLoaderData()
  console.log(allProducts);

  const sneakerss = allProducts.filter(products => products.category === "Men's Sneaker")
  const pants = allProducts.filter(products =>  products.category === "Men's Pants")
  const boots = allProducts.filter(products =>  products.category === "Men's Boot")
  const bags = allProducts.filter(products =>  products.category === "Bag")
  const caps = allProducts.filter(products =>  products.category === "Cap")
  const earphones = allProducts.filter(products =>  products.category === "Earphones")
  const bottles = allProducts.filter(products =>  products.category === "Bottle")
  
  console.log(pants);
  return (
    <div 
      className='container mx-auto mt-10 bg-zinc-200 p-4 rounded-lg'
    >
      <Tabs>
     <TabList className=" bg-black text-white p-2 rounded-lg  flex justify-around ">
      <Tab ><p className='rounded-lg flex justify-center items-center '></p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Men's Sneaker</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Men's Pants</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Men's Boot</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Bag</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Cap</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Earphones</p></Tab>
      <Tab ><p className='rounded-lg flex justify-center items-center'>Bottle</p></Tab>
      
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
      
    </div>
  );
};

export default Products;