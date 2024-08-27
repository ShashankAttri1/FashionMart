import React, {useContext } from 'react';
import Slider from "react-slick";
import Filip1 from '../Assets/Filip1.avif';
import Filip2 from '../Assets/Filip2.avif';
import Filip3 from '../Assets/Filip3.webp';
import Filip4 from '../Assets/Filip4.png';
import Filip5 from '../Assets/Filip5.avif';
import Filip6 from '../Assets/Filip6.avif';
import Filip7 from '../Assets/Filip7.avif';
import Filip8 from '../Assets/Filip8.avif';
import {ProductContext}  from './ProductContext';

const Section = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    autoplay: true,
    autoplayDuration: 1000,
  };

  const {products}= useContext(ProductContext)
console.log(products)
//   const filterproducts = products.filter((item)=>{
//     return( item.category=== "men's clothing" || item.category=== 
//       "women's clothing")
   
//   })
// console.log(filterproducts)

  return (
    <div>
      <div className='Sliderbox'>
        <Slider {...settings} className='Slider'>
          <div>
            <img src={Filip1} className='filip1' alt="img1"></img>
          </div>
          <div>
            <img src={Filip2} className='filip2' alt="img2"></img>
          </div>
          <div>
            <img src={Filip3} className='filip3' alt="img3"></img>
          </div>
          <div>
            <img src={Filip4} className='filip4' alt="img4"></img>
          </div>
          <div>
            <img src={Filip5} className='filip5' alt="img5"></img>
          </div>
          <div>
            <img src={Filip6} className='filip6' alt="img6"></img>
          </div>
          <div>
            <img src={Filip7} className='filip7' alt="img7"></img>
          </div>
          <div>
            <img src={Filip8} className='filip8' alt="img8"></img>
          </div>
        </Slider>
      </div>
      <div className='shop'>
        <h3 className='h3'>Our Products</h3>
        <hr className='hr1' />
        <h4>Shop Items</h4>
      </div>

    </div>

  );
}

export default Section;

