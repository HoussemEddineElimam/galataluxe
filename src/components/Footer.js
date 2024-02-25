"use client"
import Link from 'next/link'
import React , {useState} from 'react'
import {FaInstagram , FaFacebook , FaWhatsapp, FaFacebookMessenger} from "react-icons/fa"

const Footer = ({categories}) => {
  const [isDroped , setIsDroped] = useState(false);
  const {instgramLink , facebookLink , whatsappLink} = {instgramLink:"https://www.instagram.com/galataluxe",facebookLink:"https://web.facebook.com/galata.luxe.chaussures",whatsappLink:"https://wa.me/message/DNUJYTZX4ETMC1"}
  const socialMedia =[];
  return (
  
    <section id="footer" className="footer my-footer footer-center px-4 bg-base-300 text-white py-6">
      <div className="grid sm:grid-cols-1 lg:gap-40 md:grid-cols-1 lg:grid-cols-3">

      <div class="p-4">
    <h2 class="text-lg font-semibold mb-1">عن المتجر</h2>
    <div class="m-3"><Link href={"/about-us"}>عن المتجر</Link></div>
    <div class="m-3"><Link href={"/how-to-pay"}>طرق الدفع</Link></div>
    <div class="m-3"><Link href={"/shipping-delivery"}>الشحن و التسليم</Link></div>
  </div>

  <div class="p-4">
    <h2 class="text-lg font-semibold mb-1">الشروط والسياسات</h2>
    <div class="m-3"><Link href={"/terms-and-conditions"}>شروط الإستخدام</Link></div>
    <div class="m-3"><Link href={"/return-policy"}>سياسة الإستبدال و الإسترجاع</Link></div>
    <div class="m-3"><Link href={"/privacy"}>سياسة الخصوصية</Link></div>
  </div>

  
  <div class="p-4">
    <h2 class="text-lg font-semibold mb-1">إتصل بنا</h2>
   <div className='m-3'>للطلب بالجملة</div>
    <div class="m-3"><a href={whatsappLink}><FaWhatsapp size={50}/></a></div>
 
  </div>
      </div>
      <div className='flex'> <a href={facebookLink}><FaFacebook size={55} /></a> <a href={instgramLink}><FaInstagram color='' size={55}/></a> </div>
    </section>
  )
}

export default Footer