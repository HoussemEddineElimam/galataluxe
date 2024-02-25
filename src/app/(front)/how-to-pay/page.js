import Head from 'next/head'
import React from 'react'
const page = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-16 text-right bg-white">
      <Head>
        <title>طرق الدفع</title>
      </Head>

      <h1 className="text-4xl font-bold mb-8">طرق الدفع</h1>

      <h2 className="text-2xl font-bold mb-4">الدفع نقداً عند الاستلام (COD)</h2>

      <p className="text-lg leading-relaxed mb-4">
        الدفع عند الاستلام (Cash On Delivery) هي إحدى طرق الدفع المتاحة على متجرنا،
        والدفع عند الاستلام يعني أن المتسوق يمكنه التسوق عبر متجرنا إلكتروني واختيار
        المنتج الذي يرغب فيه ومن ثم يقوم بإجراء الطلب واختيار طريقة الدفع عند
        الاستلام وهو ما يعني أن عملية الدفع تؤجل حتى استلام العميل للمنتج الذي قام
        بطلبه إلكترونيًا.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        وسنقوم بإرسال المنتج إلى المكان المتفق عليه (المدينة أو الحي أو المنزل أو مكان
        آخر)، وبعدها يتم الدفع.
      </p>


      <p className="text-center mt-8">شكرًا لتعاملكم معنا!</p>
    </div>

  )
}

export default page