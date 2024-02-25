import Footer from "@/components/Footer";
import CategoryCards from "@/components/categoyCards";
import InstagramReels from "@/components/instgramReels";
import ProductItem from "@/components/products/productItem";
import axios from 'axios';
import React from "react";
import {FaInstagram} from "react-icons/fa"
import Image from "next/image";
import { Montserrat } from 'next/font/google';
const api = axios.create({
  baseURL: 'https://api.galataluxe.com/', 
});

const mn = Montserrat({subsets:["latin"]})
function compareByName(a, b) {
  const nameA = a.name.toUpperCase(); 
  const nameB = b.name.toUpperCase();
  
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  
  return 0;
}
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    
    console.error('Error fetching data:', error);
    throw error;
  }
};

const verify = (arr , it)=>{
  for(let i = 0 ; i< arr.length ; i++){
    if(arr[i]["id"] == it["id"]) return true;
  }
  return false;
}
export const filterArray = (arr , it)=>{
let a = [];
for(let i = 0 ; i<arr.length ; i++){
if(verify(arr[i]["categories"],it)) a.push(arr[i]);
}
return a;}

export async function productsOfCategory(item){
  const products = await fetchData("/products");
  
  return filterArray(products , item );
}


export default async function Home() {
  

  const products = (await fetchData("/products")).filter((product)=> product["stock_status"]=="instock").sort(compareByName);
  const nonStockedProducts = (await fetchData("/products")).filter((product)=> !(product["stock_status"]=="instock")).sort(compareByName);
  
    
  return (
    <>
    <div className="banner image-container">
    <img key={1}
  className="first"
  src="/images/coverture2.png"
  alt="background"
  style={{objectFit:"cover" , width:"100%" , height:"100%"}}
/>

<img key={2}
  src="/images/coverture1.png"
  alt="background"
  style={{objectFit:"cover" , width:"100%" , height:"100%"}}
/>
         
    </div>
    <div className="py-4"></div>
    <CategoryCards />
    <div className="py-2" />
    <h1 className="text-black text-4xl font-bold py-2 px-4 rounded-lg text-center my-4">
      Nos produits
    </h1>
    
    {(products.length > 0) ? (
          <>
            
            <div
              
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              {products.sort().map((it) => {
                if (it["status"] === "publish") return <ProductItem key={it['id']} product={it} />;
              })}
            </div>
          </>
        ) : (
          <></>
        )}
        {(nonStockedProducts.length > 0) ? (
          <>
            
            <div
              
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              {nonStockedProducts.sort().map((it) => {
                if (it["status"] === "publish") return <ProductItem key={it['id']} product={it} />;
              })}
            </div>
          </>
        ) : (
          <></>
        )}

    <br />
    <h1 className={"empty:p-hidden p-font-semibold text-2xl pmd-text-lg p-text-[color:var(--app-ins-title)] my-10 "+mn.className}>
      Consultez notre compte Instagram 
    </h1>
    <FaInstagram size={30} />  
    <InstagramReels />
  
    <br />
  
    
  </>
  );
}
