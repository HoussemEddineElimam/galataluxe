"use client"
import React, { useContext, useState } from 'react'
import ChekoutUI from '../app/(front)/checkout/CheckoutUI';
import useCartService from '@/lib/hooks/useCartStore';
import useSlideService from '@/lib/hooks/useSlideService';
import { OrderProvider, useOrderContext } from '@/lib/hooks/useOrderNow';
import OrderCheckout from './orderCheckout';

const OrderNow = ({item , disponible}) => {
    const {isTriggered, setTriggered } = useOrderContext();
    const {increase, decrease} = useCartService();

    const handleOrderNow = () => {
      setTriggered(true);
      
    };
  
    const handleCancel = () => {
      setTriggered(false);
     
    };
  
    if(!isTriggered) return(
      disponible?( <button className='order-now w-full tw-h-[42px] lg:tw-h-[46px] tw-mx-0  tw-primary-btn  tw-border-none tw-body-plus-2 tw-font-semibold tw-rounded-btn    product-info__buy-now' type="button" onClick={handleOrderNow}>شراء الآن</button>):
      (<button className='w-full bg-gray-300 cursor-not-allowed tw-h-[42px] lg:tw-h-[46px] tw-mx-0  tw-border-none tw-body-plus-2 tw-font-semibold tw-rounded-btn    product-info__buy-now' type="button" >
      شراء الآن
    </button>));
return (<div className='m-2'>
    <OrderCheckout item={item} />
    <button class="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 rounded" onClick={handleCancel}>
    إلغاء
</button>
</div>)
}

export default OrderNow