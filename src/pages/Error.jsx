import React from 'react'
import ErrorImg from "../assets/error2.webp"
import Footer from '../components/Footer'

const Error = () => {
  return (
    <div className='error'>
      <div className="coverImg">  <img src={ErrorImg} alt="" /> </div>
      <Footer />
    </div>
  )
}

export default Error