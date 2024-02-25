import React from 'react'
import Head from 'next/head'
const page = () => {
  return (
    <div className="container bg-white mx-auto px-4 pt-20 pb-16 text-right">
      <Head>
        <title>شروط الاستخدام</title>
      </Head>

      <h1 className="text-4xl font-bold mb-8">شروط الاستخدام</h1>

      <p className="text-lg leading-relaxed mb-4">
        تنطبق هذه الشروط والأحكام على الموقع الإلكتروني (يُشار إليه فيما يلي باسم
        الموقع) وجميع أقسامه وفروعه ومواقع الإنترنت التابعة له التي تُشير إلى هذه
        الشروط والأحكام كمرجعٍ لها.
      </p>

      <h2 className="text-2xl font-bold mb-4">عند زيارة الموقع، يقر العميل موافقته على
        الشروط والأحكام الحالية. وإن كنت لا توافق عليها، فعليك عدم استخدام هذا
        الموقع.
      </h2>

      <p className="text-md text-gray-600 mt-4">
        يحتفظ القائمون على الموقع بالحق في تغيير أجزاء من شروط الاستخدام والأحكام
        أو تعديلها أو إضافة معلومات إليها، أو إزالتها في أي وقت. وتصبح التغييرات
        سارية النفاذ عندما يتم نشرها على الموقع دون سابق إشعار. ويُرجى مراجعة
        شروط الاستخدام والأحكام بانتظام للاطلاع على أي تحديثات. ويشكِّل استخدامك
        المستمر للموقع ــ بعد نشر التغييرات الحادثة في هذه الشروط والأحكام الخاصة
        بالاستخدام ــ موافقتك التامة على تلك التغييرات.
      </p>

      <h2 className="text-2xl font-bold mb-4">استخدام الموقع</h2>

      <ul className="list ml-6">
        <li>يجب أن لا يقل عمرك عن 18 عامًا لزيارة هذا الموقع.</li>
        <li>نمنحك ترخيصًا غير قابل للتحويل أو الإلغاء لكي تستخدم الموقع بموجب
          الشروط والأحكام المحدَّدة.</li>
        <li>... (استمر في استكمال النص هنا)</li>
      </ul>

      </div>
  )
}

export default page