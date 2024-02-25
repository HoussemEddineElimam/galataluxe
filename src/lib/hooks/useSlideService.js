import { create } from "zustand";
import { persist } from 'zustand/middleware'
const initState = {
  index : 0,
}

export const currentIndex = create()(
    persist(()=> initState ,{
        name:"index"
    })
)
export default function useSlideService(){
    const{
        index
    } = currentIndex();
    return {
        index,
        initialize:()=>currentIndex.setState(initState),
        setIndex:(ind)=>currentIndex.setState({
            index:ind
        }),

        }
   
}
