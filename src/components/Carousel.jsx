import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

const Carousel = ({data, current, next, before}) => {


const {image, name, title, quote} = data[current]

  return (
    <section className="slider-container">
      <article className="slide">
      <img className="person-img" src={image} alt={name} />
        <h5 className="name">{name}</h5>
        <p className="title">{title}</p>
        <p className="text">{quote}</p> 
        <FaQuoteRight className='icon' />
       
      </article>
      
        <button className='prev' onClick={before}>  <FiChevronLeft /></button>
        <button className='next' onClick={next}>  <FiChevronRight /></button>
    </section>

    
  )
}

export default Carousel