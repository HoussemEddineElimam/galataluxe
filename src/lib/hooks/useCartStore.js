import { create } from "zustand";
import { round2 } from "../round2";
import { persist } from 'zustand/middleware'
const initState = {
    items :[],
    itemsPrice:0,
    shippingPrice:0,
    totalPrice:0,
    paymetMethod:"cod",
    shippingAdress:{
        firstName:"",
        lastName:"",
        phone:"",
        state:"",
        city:"",
        postalCode:"",

    }
}

export const cartStore = create()(
    persist(()=> initState ,{
        name:"cart"
    })
)
export default function useCartService(){
    const{
        items , itemsPrice , shippingPrice , totalPrice , shippingAdress,
    } = cartStore();
    return {
        items , itemsPrice , shippingPrice , totalPrice ,shippingAdress,
        initialize:()=>cartStore.setState(initState),
        increase:(item)=>{
            const exist =  items.find(i=>(item["product_id"] == i["product_id"]));
            const updatedItems = exist? items.map(i => (item["product_id"] == i["product_id"]) ? {...exist, quantity:exist["quantity"] +1,meta_data:[...exist["meta_data"],...item["meta_data"]]} : i
            ):[...items,{...item , quantity:1}];
           const {itemsPrice , totalPrice} =  calcPrice(updatedItems);
            cartStore.setState({
                items:updatedItems,
                itemsPrice,
                totalPrice

            });
        },
        decrease:(item)=>{
            const exist = items.find(i => (item["product_id"] == i["product_id"]));
            if(!exist) return;
            const updatedItems = (!(exist["quantity"] == 1))? items.map(i => (item["product_id"] == i["product_id"]) ? {...exist, quantity:exist["quantity"] -1} : i)
            : items.filter(i => i["product_id"]!=item["product_id"]);
            const {itemsPrice , totalPrice} =  calcPrice(updatedItems);
            cartStore.setState({
                items:updatedItems,
                itemsPrice,
                shippingPrice,
                totalPrice

            });
        },
        saveShippingAdress:(shippingAdress)=>{
            cartStore.setState({
                shippingAdress,
            });
        
        },
        setShippingPrice:(state)=>{
             let shippingPrice = 0 ;
             if(state=="البليدة"||state=="الجزائر") shippingPrice = 300;
             else if(state =="أدرار"||state=="بشار"||state=="إليزي"||state=="ورقلة"||state=="تندوف"||state=="تمنراست") shippingPrice = 700;
             else if(state ==""||state=="إختر الولاية")shippingPrice = 0;
             else shippingPrice =500;
             cartStore.setState({
                shippingPrice
             })   

        }
       
    }
}
function calcPrice(array){
    const itemsPrice = round2(array.reduce((acc , item)=>acc+item["price"]*item["quantity"],0)),
    totalPrice = round2(itemsPrice) ;
    return {itemsPrice ,totalPrice};
}