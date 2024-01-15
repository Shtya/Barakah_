import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Img1 from "../assets/partners/1.webp"
import Img2 from "../assets/partners/2.webp"
import Img3 from "../assets/partners/3.webp"
import Img4 from "../assets/partners/4.webp"
import Img5 from "../assets/partners/5.webp"

var settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1 , 
  autoplay:true ,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 1 ,
      }
    },
    {
      breakpoint: 1000,
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

const data = [
  {img: Img1 , title : "د. وائل السعيد" , desc:" نعمل  في الأوقاف على تحقيق الأهداف من خلال دعم المشاريع الخيرية والإنسانية وتقديم الدعم المالي والمعنوي لها"},
  {img: Img2 , title : "د. وائل السعيد" , desc:" نعمل  في الأوقاف على تحقيق الأهداف من خلال دعم المشاريع الخيرية والإنسانية وتقديم الدعم المالي والمعنوي لها"},
  {img: Img3 , title : "د. وائل السعيد" , desc:" نعمل  في الأوقاف على تحقيق الأهداف من خلال دعم المشاريع الخيرية والإنسانية وتقديم الدعم المالي والمعنوي لها"},
  {img: Img4 , title : "د. وائل السعيد" , desc:" نعمل  في الأوقاف على تحقيق الأهداف من خلال دعم المشاريع الخيرية والإنسانية وتقديم الدعم المالي والمعنوي لها"},
  {img: Img5 , title : "د. وائل السعيد" , desc:" نعمل  في الأوقاف على تحقيق الأهداف من خلال دعم المشاريع الخيرية والإنسانية وتقديم الدعم المالي والمعنوي لها"},
]
const Partners = () => {
  return (
    <div className="partners bs-white">
    <div className="h1"> شركائنا</div>
    <div className="phead">شركاء في بناء مستقبل أوقافًا مستدامة</div>
    <Slider {...settings} className='container' > 
      { data?.map((e,index)=>(
        <div className="box" key={index}> 
          <img src={e.img} alt="" />
          <div className="text"> <div className="h2"> {e.title} </div> <div className="p"> {e.desc} </div> </div>
        </div>
    ))} 

    </Slider>
  </div>
  )
}

export default Partners

