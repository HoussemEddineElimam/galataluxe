'use client'
import useCartService from "@/lib/hooks/useCartStore"
import Link from "next/link"
import React , { useEffect , useState} from "react"
import {BsCart} from 'react-icons/bs'
const Menu = () => {
    const {items} = useCartService();
    const [mounted , setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    },[])
  return (
    <>
    <div>
        <ul className="flex w-full justify-between">
          <li><Link href={"/"}><h1 class="text-3xl font-bold text-white">Galata Luxe</h1> </Link> </li>
      <li> <div className="w-10"></div></li>
      <li> <Link className="btn btn-ghost rounded-btn" href="/cart">  <BsCart size={24}/>
            {mounted && items.length !=0&&(
                <div className="badge badge-secondary">
                    {items.reduce((a,c)=>a+ c['quantity'] , 0)}{" "}

                </div>
            )}
         </Link> </li>
        </ul>
    </div>
    </>
  )
}

export default Menu