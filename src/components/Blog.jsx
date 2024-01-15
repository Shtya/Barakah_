import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Imgblog from "../assets/blog/1.webp"
import share from "../assets/share.webp"
import { useNavigate } from 'react-router-dom'

var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1 , 
  autoplay:true ,
  responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1 ,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1 ,
      }
    },
  ]
};
const blog = [
  {img : Imgblog , title:" استمتع في الحديقه " , desc:"الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة." , data:"15" , data2:"May"},
  {img : Imgblog , title:" استمتع في الحديقه " , desc:"الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة." , data:"16" , data2:"May"},
  {img : Imgblog , title:" استمتع في الحديقه " , desc:"الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة." , data:"17" , data2:"May"},
  {img : Imgblog , title:" استمتع في الحديقه " , desc:"الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة." , data:"18" , data2:"May"},
]


const Blog = () => {
  const Navigate = useNavigate() ;
  
  return (
    <div className="blog">
    <div className="h1"> احدث المدونات</div>
    <div className="phead"> تعلم، استكشف، وشارك في فعالياتنا </div>
    <Slider className="container" {...settings}>
      {
        blog.map((e,index)=> (
      <div className="box">
        <div className="coverImg">
          <img className="main" src={Imgblog} alt=""/>
          <img className="second" src={share} alt=""/>
          <div className="box-data">
            <div className="num">{e.data}</div>
            <div className="month"> {e.data2} </div>
          </div>
        </div>

        <div className="h2"> {e.title} </div>
        <div className="p"> {e.desc} </div>
      </div>
        )) }
      
    </Slider>
    <div className="bt" onClick={_=> Navigate("/blogs")}>  اكتشف المزيد </div>
  </div>
  )
}

export default Blog