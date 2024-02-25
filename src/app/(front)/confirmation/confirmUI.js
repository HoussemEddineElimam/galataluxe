"use client"
import useCartService from "@/lib/hooks/useCartStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {event} from "@/lib/fpixel"

const Confirm = ()=>{
  const [rendered , setRender] = useState(false);
  useEffect(()=>setRender(true),[]);
  const {shippingAdress , shippingPrice,totalPrice , initialize , items} = useCartService()
  const router = useRouter();
  const handleClick=()=>{
    event("Purchase",{currency:"DZD" , value:10});
   }
  const agree = ()=>{
   
    fetch('https://api.galataluxe.com/place-order', {
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({  shipping: {
          first_name: shippingAdress["firstName"],
          last_name: shippingAdress["lastName"],
          phone: shippingAdress["phone"],
          state: shippingAdress["state"],
          city: shippingAdress["city"],
          postcode: shippingAdress["postalCode"],
        },
        billing: {
          first_name: shippingAdress["firstName"],
          last_name: shippingAdress["lastName"],
          phone: shippingAdress["phone"],
          state: shippingAdress["state"],
          city: shippingAdress["city"],
          postcode: shippingAdress["postalCode"],
        },
        line_items: items,
        shipping_total: shippingPrice,})
      })
        .then((response) => {
          
          if (response.status === 200) {
            return response.json();
          } else {
            console.error('Login failed');
            throw new Error('Login failed');
          }
        })
        .then((data) => {
          
          console.log('Login successful:', data);initialize();
          router.push("/ty")
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }
    if(!rendered) return;
    return shippingAdress["city"]!=""?(
      
      <div className="flex flex-col bg-gray-800 p-4 rounded-md">
  <div className="mb-2">
    <p className="text-white bg-blue-500 p-2 rounded">
      <span className="text-arabic">الإسم</span>: {shippingAdress["firstName"]}
    </p>
  </div>
  <div className="mb-2">
    <p className="text-white bg-blue-500 p-2 rounded">
      <span className="text-arabic">اللقب</span>: {shippingAdress["lastName"]}
    </p>
  </div>
  <div className="mb-2">
    <p className="text-white bg-blue-500 p-2 rounded">
      <span className="text-arabic">رقم الهاتف</span>: {shippingAdress["phone"]}
    </p>
  </div>
  <div className="mb-2">
    <p className="text-white bg-blue-500 p-2 rounded">
      <span className="text-arabic">الولاية</span>: {shippingAdress["state"]}
    </p>
  </div>
  <div className="mb-2">
    <p className="text-white bg-blue-500 p-2 rounded">
      <span className="text-arabic">البلدية / الدائرة</span>: {shippingAdress["city"]}
    </p>
  </div>
  <div className="mb-2">
    <p className="text-white bg-blue-500 p-2 rounded">
      <div className="text-arabic">السعر الإجمالي</div>  
      : {totalPrice + shippingPrice} DA
    </p>
  </div>
  <button
    className="bg-green-500 text-white px-4 py-2 rounded-md"
    onClick={(e) =>{ agree(); handleClick()}}
  >
    موافق
  </button>
</div>

    ):(<h1>Confirm not found</h1>)



}

export default Confirm;