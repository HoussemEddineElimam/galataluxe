"use client"
import React , {useState , useEffect} from 'react'
import { useRouter } from 'next/navigation';
import useCartService from '@/lib/hooks/useCartStore';
import Image from 'next/image'
import Link from 'next/link'
const CartDetails = () => {
    const router = useRouter();
    const {items , itemsPrice , decrease , increase} = useCartService();
    const   [mounted , setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    },[])
    if(!mounted) return;
    return ( <>
      <h1 className="py-4 text-3xl font-bold">Panier</h1>
    
      {items.length === 0 ? (
        <div className="text-gray-600">
          Le panier est vide. <Link href="/" className="text-blue-500 hover:underline">achats</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <table className="table w-full">
              <thead>
                <tr className="text-left">
                  <th>produit</th>
                  <th>Quantité</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item["product_id"]} className="border-b border-gray-200">
                    <td className="flex items-center space-x-4">
                      <Link href={`/product/${item["product_id"]}`}>
                        <span className="flex items-center">
                          <Image
                            src={item["images"][0]["src"]}
                            alt={item["name"]}
                            width={50}
                            height={50}
                            objectFit='contain'
                            className="rounded-md"
                          />
                          <span className="pl-2">{item["name"]}</span>
                        </span>
                      </Link>
                    </td>
                    <td className="flex items-center space-x-4">
                      <button
                        className="btn text-md bg-gray-200 text-gray-700"
                        type="button"
                        onClick={() => decrease(item)}
                      >
                        -
                      </button>
                      <span className="px-2">{item["quantity"]}</span>
                      <button
                        className="btn text-md bg-gray-200 text-gray-700"
                        type="button"
                        onClick={() => increase(item)}
                      >
                        +
                      </button>
                    </td>
                    <td> <span className='text-lg'> {item["price"]}</span> DA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <div className="card bg-base-300">
              <div className="card-body">
                <ul className="text-white">
                  <li className="pb-3 text-xl">
                    الإجمالي ({items.reduce((a, c) => a + c["quantity"], 0)}): 
                    <div>{itemsPrice} DA</div>
                  </li>
                  <li>
                    <button
                      onClick={() => router.push('/checkout')}
                      className="btn btn-primary w-full"
                    >
                      عمل طلب
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>)
}

export default CartDetails