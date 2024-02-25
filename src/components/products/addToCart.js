'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import useCartService from '@/lib/hooks/useCartStore'
import { useOrderContext } from '@/lib/hooks/useOrderNow'

const AddToCart = ({item , disponible}) => {
    const router = useRouter();
    const {isTriggered} =  useOrderContext();
    const {items,decrease , increase} = useCartService();
    const [existItem , setExistItem] = useState();
    useEffect(()=>{
        setExistItem((init)=> {return items.find((x)=>{
          x["product_id"] == item["product_id"];})
      });
    },[items,item]);
    
    const addToCartHandler = ()=>{
        increase(item);
        router.replace("/cart")
    }
    if(isTriggered)
      return <></>
  return existItem?(
    <div>
    <button className='btn' type='button' onClick={()=>decrease(existItem) }>-</button>
    <span className='px-2'>{existItem['qty']}</span>
    <button className='btn' type="button" onClick={()=>increase(existItem)}>+</button>
    
    </div>
  ):(
    
    disponible?( <button className='add-to-cart tw-h-[42px] lg:tw-h-[46px] tw-mx-0 text-white  tw-border-none tw-body-plus-2 tw-font-semibold tw-rounded-btn    product-info__buy-now  w-full' type="button" onClick={addToCartHandler}>أضف إلى السلة</button>):
   (<button className=' w-full bg-gray-300 cursor-not-allowed tw-h-[42px] lg:tw-h-[46px] tw-mx-0   tw-border-none tw-body-plus-2 tw-font-semibold tw-rounded-btn    product-info__buy-now' type="button" >
   أضف إلى السلة
 </button>)
  )
  
}

export default AddToCart