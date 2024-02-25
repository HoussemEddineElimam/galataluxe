import React from 'react'
import CheckoutUI from './CheckoutUI'
import { fetchData } from '../page'

const page =async () => {
 const  theStates =await fetchData("/states");
 
 if(!theStates) return;
  return (
    <CheckoutUI TheStates={theStates}/>
  )
}

export default page;