import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
const mn = Montserrat({subsets:["latin"]})
const ProductItem = ({ product , key }) => {
  return (
  
  <div className=" tw-rounded-[10px]  tw-overflow-hidden tw-flex tw-flex-col product-snippet-content" key={key}>
 <div className='product-snippet__indent'><Link href={"/product/"+product["id"]} > <Image className="tw-inset-0 tw-m-auto tw-w-full tw-h-full tw-object-cover product-snippet__img-first lazyautosizes ls-is-cached lazyloaded" width={200} height={200} src={product['images'][0]?.src} alt="Product Image"/></Link> </div>
  <div className="tw-pt-1.5  tw-px-5 tw-pb-4 lg:tw-px-7 lg:tw-pb-5  product-snippet-info">
    <div className='product-snippet__title-wrapper'>
  <Link href={"/product/"+product["id"]}> <h3 className={"tw-m-0 tw-font-normal  tw-text-left  type-body-font-family tw-text-body-font-size lg:tw-body-plus-2 product-title-transform product-snippet__title-normal dj_skin_product_list_title "+mn.className}>{product.name}</h3></Link> 
  </div>
    { (product["stock_status"]=="instock")? <p className={"tw-mt-1.5 tw-mr-0.5 md:tw-body-plus-2 tw-text-price-color product-snippet__price money notranslate "+mn.className} style={{fontWeight:"500"}}>{product.price} DA</p>:<p className="custom-card-price text-xl text-gray">Prochain arrivage</p>}
  </div>
</div>
  );
};

export default ProductItem;
