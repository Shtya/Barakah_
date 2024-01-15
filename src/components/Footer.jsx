import React from 'react'
import ImgSectionFooter from "../assets/bg2.webp"

import Email from '../assets/email2.webp'
import place from '../assets/place.webp'
import phone from '../assets/phone.webp'
import phone2 from '../assets/phone2.webp'

import Linkedin from "../assets/linkedin.webp"
import x        from "../assets/x.webp"
import insta    from "../assets/insta.webp"
import face     from "../assets/face.webp"
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer id='footer'>

    <div className="imgCover"> <img src={ImgSectionFooter} alt="" /> </div>
    <div className="top">
      <div className="container">
        <ul className="logo-ul">
          <div className="coverImg"> <img src="https://iili.io/J7koZW7.webp " alt=""/>  <img className="second" src="https://iili.io/J7koQxS.webp " alt=""/></div>
          <div className="p">نرتقي بالقطاع غير الربحي، ننشر ثقافة الوقف، ونحقق استدامة الأصول من أجل مستقبل أفضل</div>
          
        </ul>

        <ul>
          <div className="h1"> روابط سريعه </div>
          <li onClick={_=> navigate("/")} > الرئيسية </li>
          <li onClick={_=> navigate("/services")} > الخدمات</li>
          <li onClick={_=> navigate("/contact-us")} > تواصل معنا </li>
          <li onClick={_=> navigate("/about-us")} > حولنا </li>
        </ul>

        <ul className="en">
          <div className="h1"> كن علي تواصل </div>
          <li> <img src={ place }/> 10A st. Villa 47 <br/> Umm Al Sheif, Dubai </li>
          <li> <img src={ Email }/> info@bwaqf.ae </li>
          <li> <img src={ phone}/> +971554541122 </li>
          <li> <img src={ phone2 }/> +97143339645 </li>
        </ul>

        <ul>
          <div className="h1"> مواقع التواصل </div>
          <div className="social">  
            <li> <img src={Linkedin } alt=""/>  <div className="p">  لينكدإن</div> </li>
            <li> <img src={x        } alt=""/>  <div className="p"> تويتر</div> </li>
            <li> <img src={insta    } alt=""/>  <div className="p"> إنستجرام</div> </li>
            <li> <img src={face     } alt=""/>  <div className="p"> فيسبوك</div> </li>
          </div>
        </ul>

      </div>
    </div>
    <div className="bottom">
      <div className="container">
        <div className="p"> حقوق الطبع والنشر محفوظة </div>
        <div className="p">تم انشاءه بواسطه <span> MRM </span></div>
      </div>
    </div>
  </footer>
  )
}

export default Footer