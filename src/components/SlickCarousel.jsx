import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import {longList} from '../data'

const SlickCarousel = ()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <section className="slick-container">
        
        <Slider {...settings}>
          {longList.map(e=>{
            const {image, name, title, quote, id} = e
            
            return (
                
                <article key={id}>
                <img className="person-img" src={image} alt={name} />
                  <h5 className="name">{name}</h5>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p> 
                  <FaQuoteRight className='icon' />
                 
                </article>
                
                  
              
            )
            
          })}
        </Slider>
      </section>
    )
}

export default SlickCarousel
