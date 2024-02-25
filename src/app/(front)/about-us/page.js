import React from 'react'
import Head from 'next/head'
const page = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-16 text-right">
    <Head>
      <title>عن المتجر</title>
    </Head>

    <h1 className="text-4xl font-bold mb-8">عن المتجر</h1>

    <p className="text-lg leading-relaxed mb-4">
      هذا المتجر بوابتك الجديدة للتسوق إلكترونياً بشكل سهل وبسيط.
    </p>

    <p className="text-lg leading-relaxed mb-4">
      نوفر لك منتجات متعددة ذات جودة عالية لتختار منها الأفضل وبسعر تنافسي لن
      تجده في أي مكان آخر.
    </p>

    <p className="text-lg leading-relaxed mb-4">
      التسوق معنا عملية ممتعة وأمنة. ونوفر لك كل ما تحتاجه من التسهيلات سواء في
      اختيار المنتج أو في عملية الدفع أو في عملية الشحن.
    </p></div>
  )
}

export default page