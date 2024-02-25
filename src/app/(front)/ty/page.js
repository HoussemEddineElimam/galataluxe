import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="bg-white rounded-lg p-8 text-center text-black">
      <h2 className="text-3xl mb-4">شكرا لك</h2>
      <p className="text-lg">لقد تم تسجيل طلبكم سيتم التواصل معكم لتأكيد الطلبية خلال 24 ساعة</p>
     <Link href={"/"} > <p className="text-lg mt-4">الرجوع إلى المتجر</p></Link>
    </div>
  )
}

export default page