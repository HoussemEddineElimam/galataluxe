import React from 'react'
import Head from 'next/head'
const page = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-16 text-right">
      <Head>
        <title>الشحن والتسليم</title>
      </Head>

      <h1 className="text-4xl font-bold mb-8">الشحن والتسليم</h1>

      <p className="text-lg leading-relaxed mb-4">
        بعد تأكيد عملية الشراء، نقوم بشحن وإرسال المنتج عبر الطريقة التي قمتم باختيارها،
        إما عبر مسؤول الشحن الخاص بنا أو عبر خدمة شركة التوصيل.
      </p>

      <h2 className="text-2xl font-bold mb-4">طرق الشحن</h2>

      <ul className="listml-6">
        <li>
          خدمة التوصيل: تضمن لكم تسليم الإرساليات إلى العنوان المطلوب في مدة تتراوح
          بين 2 أيام و7 أيام نحو الاتجاهات الرئيسية.
        </li>
        <li>
          مسؤول الشحن: يتعاقد متجرنا مع مجموعة من مسؤولي الشحن بمجموعة من المدن يقومون
          بإيصال المنتجات في مدة تتراوح بين يوم و3 أيام.
        </li>
      </ul>


      <p className="text-center mt-8">شكرًا لتعاملكم معنا!</p>
    </div>
  )
}

export default page