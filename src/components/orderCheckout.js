"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useCartService from '@/lib/hooks/useCartStore';
import { fetchData } from '@/app/(front)/page';


const FormField = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
      {label}:
    </label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border bg-white p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
    />
  </div>
);
const fetchStates = async  () =>{
  const data = fetchData("/states");
  return data;
}
const fetchCities = async (number)=>{
 
    const data = await  fetchData("/states/"+number);
    return data;
}
const OrderCheckout = ({item}) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const router = useRouter();
  const { saveShippingAdress, increase, totalPrice, shippingPrice,setShippingPrice, initialize, items } = useCartService();
  const [cities , setCities] = useState([]);
  const [selectedStateNumber , setSelectedStateNumber] = useState();
  const [TheStates , setStates] = useState([]);


  useEffect(()=>{
    fetchStates().then((data)=>setStates(data)).catch((e)=> console.log(e));
  },[])
  useEffect(()=>{
   if(selectedState!=""){
    fetchCities(selectedStateNumber).then((data)=>setCities(data)).catch((e)=> console.log(e));
    
    }else setCities([]);



},[selectedStateNumber , selectedState])

  const formSubmit = () => {
    increase(item);
    saveShippingAdress({ firstName, lastName, phone, state: selectedState, city: selectedCity, postalCode });

    router.push('/confirmation');
  };

  const handleStateChange = (event) => {
    setShippingPrice(event.target.value);
    setSelectedState(event.target.value);setSelectedStateNumber(TheStates.find((i)=>i["name"] ==event.target.value)["number"]);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    
    setSelectedCity(event.target.value);
    setPostalCode(cities.find(i=>event.target.value == i["name"])["postalCode"]);
   
  };
  if (!TheStates) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="max-w-sm mx-auto card my-4 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">طلب المنتج</h2>
        <form>
          <FormField label="الإسم" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <FormField label="اللقب" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <FormField
            label="رقم الهاتف"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]*"
          />

<div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-600">
          الولاية
        </label>
        <select
          id="state"
          name="state"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          onChange={handleStateChange}
          value={selectedState}
          required
        >
          <option value="">إختر الولاية</option>
          {TheStates.length > 0 ? (
            TheStates.map((state) => (
              <option key={state.name} value={state["name"]}>
                {state.number + " " + state.name}
              </option>
            ))
          ) : (
            <option value="">Loading...</option>
          )}
        </select>
      </div>
      <div className="mb-8">
        <label htmlFor="city" className="block text-sm font-medium text-gray-600">
          البلدية/الدائرة
        </label>
        <select
          id="city"
          name="city"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          onChange={handleCityChange}
          value={selectedCity}
          required
        >
          <option value="">إختر البلدية أو الدائرة</option>
          {(cities.length > 0) ? (
            cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))
          ) : (
            <option value="">Loading...</option>
          )}
        </select>

      </div>
      {selectedState!=""?(<><span className="text-gray-700 text-lg mb-2">سعر التوصيل </span ><div className='text-xl'>{shippingPrice} DA</div></>):(<></>)}
    </div>
          <h2 className="text-2xl font-bold mb-4">السعر الإجمالي</h2>
          <p className="text-xl mb-2">{Number(item.price) + shippingPrice} DA</p>
        </form>
        {selectedCity !== '' ? (
          <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => formSubmit()}>
            طلب الآن
          </button>
        ) : (
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-not-allowed" disabled>
            طلب الآن
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCheckout;
