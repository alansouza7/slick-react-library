import { useEffect, useState, useRef } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import SlickCarousel from './components/SlickCarousel'
import {longList} from './data'

function App() {
  
const [peopleData, setPeopleData] = useState(longList)
const [currentPerson, setCurrentPerson] = useState(0)

const next = ()=>{
  setCurrentPerson(oldNumber => {
    if(oldNumber === peopleData.length - 1){
      return oldNumber = 0
    } else {
      return oldNumber + 1
    }
  
  })
}

const before = ()=>{
  setCurrentPerson(oldValue =>{
    if(oldValue === 0) {
      return oldValue = (peopleData.length - 1)
    } else {
     return  oldValue - 1
    }
  })
}

useEffect(()=>{
    let timer = setTimeout(()=>{
      next()
    }, 2000)
  
 return ()=> clearTimeout(timer)
}, [next])


  return (
    <main>
      {/* <Carousel data={peopleData} current={currentPerson} next={next} before={before}/> */}
      <SlickCarousel/>
    </main>
  )
}

export default App
