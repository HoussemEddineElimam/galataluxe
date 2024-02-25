"use client"
import React , {useState } from 'react'
import ProductVariantRadio from '@/components/radioButton';
import AddToCart from '@/components/products/addToCart';
import OrderNow from '@/components/orderNowForm';
import useSlideService from '@/lib/hooks/useSlideService';
import { OrderProvider } from '@/lib/hooks/useOrderNow';
const Attributs = ({product , attributes}) => {
  const [selectedVariant, setSelectedVariant] = useState({});
  const {setIndex} = useSlideService();
  const handleVariantChange = (name, value) => {
    setSelectedVariant((prevSelectedVariant) => ({
      ...prevSelectedVariant,
      [name]: value,
    }));
  };
 
  return (
   <OrderProvider> {attributes.map((item,index)=>product["stock_status"]=="instock"?(<div key={index} >
            <h1 className='text-2xl text-black' > {item["name"]} </h1>
           <div  className='flex flex-wrap'>
                {item["options"].map((it,i)=>( 
                  <ProductVariantRadio  id={item["id"] } checked={it==selectedVariant[item["name"]]} label={it} value={it} key={i} onChange={() =>{setIndex(i); handleVariantChange(item["name"], it)}}/>

                ))
}

           </div>
           </div>):(<></>))}
           <OrderNow disponible={selectedVariant["taille"]&&(product["stock_status"]=="instock")}  item={{product_id:product["id"],name:product["name"],quantity:0,images:product["images"],
           
           categories:product["categories"],price:product['price'], meta_data:[{key: "couleur",value: selectedVariant["couleur"]},{key:"taille",
            value:selectedVariant["taille"]}]}} />
           <br/>
           <AddToCart item={{product_id:product["id"],name:product["name"],quantity:0,images:product["images"],
           
           categories:product["categories"],price:product['price'], meta_data:[{key:"taille",
            value:selectedVariant["taille"]}]}}  disponible={(product["stock_status"]=="instock")&&selectedVariant["taille"]}   />
            </OrderProvider>
  )
}

export default Attributs