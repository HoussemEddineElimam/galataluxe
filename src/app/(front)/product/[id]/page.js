import Link from 'next/link';
import Image from 'next/image';
import { fetchData } from '../../page';
import Attributs from './Attributs';
import { parse } from 'node-html-parser';
import SwiperImages from './swiperImages';


const sanitizeHTML = (html) => {
  const data = parse(html)
  return data.innerText||"";
};

const ProductDetails = async  ({params}) => {
  
  const data = await fetchData("/products");
    const product = data.find((item)=> item["id"] == params["id"]);
    const attributes =product["attributes"]
    
    if(!product)
    return <div>Product Not found</div>
  return (

    <>
    <div className="my-2">
      

      

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mt-4">
        <SwiperImages product={product} />
        <div className="md:col-span-1 mt-2 md:mt-0">
          <ul >
            

            <li>
              <div className="divider"></div>
            </li>

            <li>
            

<div className="card bg-white shadow-xl mt-3 md:mt-6 text-black">
  <div className="card-body">
  <div >
  <h1 className="text-2xl font-normal text-black">{product["name"]}</h1>
             
              </div>
    <div className="mb-4 flex justify-between items-center">
      {product.stock_status === 'instock' && (
        <>
          <div className="tw-text-save-color tw-font-semibold tw-mr-2 product-info__header_price money notranslate">Prix</div>
          <div className="tw-text-save-color tw-font-semibold tw-mr-2 product-info__header_price money notranslate">{product["price"]} DA</div>
        </>
      )}
    </div>

    <div className="mb-4 flex justify-between items-center">
      <div>Statut</div>
      <div className={product["stock_status"] === 'instock' ? 'text-green-500' : 'text-red-500'}>
        {product["stock_status"] === 'instock' ? 'En stock' : 'Indisponible'}
      </div>
    </div>

      

    <Attributs product={product} attributes={attributes} />

    
  </div>
</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-lg mx-auto mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="text-gray-700">{sanitizeHTML(product["description"])}</p></div>
</div>
        
          
        
      
          
        
    
    </>
  )
}

export default ProductDetails