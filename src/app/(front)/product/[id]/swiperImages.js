"use client" 
import React ,{useState , useRef, useEffect} from 'react'
import {IoIosArrowBack , IoIosArrowForward} from "react-icons/io"
import { useSwipeable } from 'react-swipeable';
import {Navigation , Autoplay , Pagination , Scrollbar, A11y} from "swiper/modules"
import Image from 'next/image';


const SwiperImages = ({product , ind}) => {
  const images = product["images"];
   
   const [currentIndex , setIndex] = useState(0);
   const handleClick = (index)=>{
    setIndex(index);
    
   }
   const handleSwipe = (direction) => {
    if (direction === 'left') {
      setIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
    } else if (direction === 'right') {
      setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  
  return (
    <div className="md:col-span-1">
      <div>
      <Image
              src={images[currentIndex]["src"]}
              alt={product["name"]}
              width={500}
              height={500}
              objectFit='contain'
              sizes="100vw"
              className={"w-full h-auto"}
              {...handlers}
            />
            {currentIndex !== 0 && (
        <IoIosArrowBack
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
          onClick={() => setIndex(currentIndex - 1)}
        />
      )}
      {currentIndex !== images.length - 1 && (
        <IoIosArrowForward
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
          onClick={() => setIndex(currentIndex + 1)}
        />
      )}
            </div>
            <div className={"flex"}>
              {images.map((item,i)=>(<div key={i} style={{width:100,height:100}} onClick={(e)=>{handleClick(i)}} > <Image
              src={item["src"]}
              alt={product["name"]}
              width={100}
              height={100}
              objectFit='contain'
              className={currentIndex==i?"w-full h-auto hover:opacity-100 cursor-pointer m-2 p-2":"w-full h-auto opacity-50 hover:opacity-100 cursor-pointer m-2 p-2"}
            /></div>))}
            </div>
        </div>
  )
}

export default SwiperImages