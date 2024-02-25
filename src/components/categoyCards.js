import React from 'react';
import { fetchCategories , fetchData } from '@/app/(front)/page';
import Image from 'next/image';
import Link from 'next/link';
import {Montserrat} from "next/font/google"
const mn = Montserrat({subsets:["latin"]})
const verify = (arr , it)=>{
    for(let i = 0 ; i< arr.length ; i++){
      if(arr[i]["id"] == it["id"]) return true;
    }
    return false;
  }
   const filterArray = (arr , it)=>{
  let a = [];
  for(let i = 0 ; i<arr.length ; i++){
  if(verify(arr[i]["categories"],it)) a = [...a , ...arr[i]["images"]]
  }
  return a;}
const CategoryCards = async () =>{
    const products = await fetchData("/products");
    const categories = await fetchData("/categories");
    const imagesPerCategory = categories.map((item)=>{
        return {id: item["id"] ,name:item["name"],images:filterArray(products , item) }
    })


  return (
    <div className="flex flex-wrap justify-around">
      {imagesPerCategory.length >0&&
       imagesPerCategory.map((i)=>{
        
        if(i["images"][0]!= undefined)
        return (<Link href={`category/${i["id"]}`}>
        <div className='relative flex flex-col items-center  w-30 h-30 md:w-32 md:h-32 lg:w-40 lg:h-40 overflow-hidden ' style={{borderRadius:20}} key={i["id"]}><div  className="relative w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden"><Image
        src={i["images"][0]["src"]}
        alt={i["name"]}
        layout="fill"
        objectFit='cover'
        className="rounded-full"
      />
      </div><p className={'tw-m-0 tw-p-0 tw-pt-2  tw-text-center tw-text-body-font-size type-body-font-family '+mn.className} style={{fontWeight:"500"}}>
  {i["name"]}
</p>
</div></Link>)
       })}
      
    </div>
  );
};

export default CategoryCards;