import React from 'react'

const page = () => {
  return (
    <div className='bg-white p-8 rtl'>
  <h1 className="text-4xl font-bold mb-8">سياسة الخصوصية</h1>

  <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Column 1 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">جمع البيانات</h2>
      <p className="text-lg leading-relaxed mb-4">
        نحتاج لجمع معلوماتك عند طلبك شراء منتج من موقعنا. نقوم بجمع وتخزين ومعالجة
        البيانات اللازمة لمتابعة شرائك وتزويدك بالخدمات المتاحة. ونستخدم المعلومات
        التي تقدّمها لمعالجة طلباتك وتقديم الخدمات والمعلومات المعروضة على الموقع.
      </p>
    </div>

    {/* Column 2 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">استخدام البيانات</h2>
      <p className="text-lg leading-relaxed mb-4">
        نستخدم بياناتك الشخصية لأغراضٍ مختلفة، بما في ذلك:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>إتمام طلباتك</li>
        <li>توفير الخدمات والدعم</li>
        <li>تحسين تجربة المستخدم</li>
        <li>إجراء استطلاعات الرأي وأبحاث التسويق</li>
        <li>إرسال معلومات عن منتجاتنا وخدماتنا</li>
        <li>تواصل معك بشأن العروض والخصومات</li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">ملفات تعريف الارتباط (Cookies)</h2>
      <p className="text-lg leading-relaxed mb-4">
        لا يُعتبر قبول ملفات تعريف الارتباط شرطًا أساسيًا لزيارة الموقع. ونستخدمها
        لضمان راحتك عند تصفّح الموقع (لتذكر هويّتك عند تعديل سلّة التسوق) وليس من
        أجل الحصول على معلومات أخرى عنك.
      </p>
    </div>
  </div>

  {/* Additional sections */}
  <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
    {/* Column 1 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">الأمان</h2>
      <p className="text-lg leading-relaxed mb-4">
        نستخدم تقنيات وإجراءات أمان مناسبة لمنع أي وصول غير مصرّح به أو غير
        قانوني لمعلوماتك أو فقدانها أو تدميرها.
      </p>
    </div>

    {/* Column 2 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">حقوق العميل</h2>
      <p className="text-lg leading-relaxed mb-4">
        * الحق في الوصول إلى بياناتك الشخصية
        * الحق في تصحيح أي أخطاء في بياناتك
        * الحق في طلب التوقّف عن استخدام بياناتك لأغراض تسويقية
      </p>
    </div>

    {/* Column 3 */}
    <div>
      <h2 className="text-2xl font-bold mb-4">للتواصل معنا</h2>
      <p className="text-lg leading-relaxed mb-4">
        إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية، يرجى التواصل معنا.
      </p>
    </div>
  </div>
</div>

  )
}

export default page