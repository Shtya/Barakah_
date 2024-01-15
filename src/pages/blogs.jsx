import React, { useEffect } from 'react'
import Navbar1 from './Navbar'
import ImgIntro from "../assets/blog/1.webp"
import Imgblog from "../assets/blog/1.webp"
import share from "../assets/share.webp"
import Footer from '../components/Footer'

const Blogs = () => {

  return (
    <div className='blogs-page' id='up'>
    <div className="container"> <Navbar1 /> </div>
    <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>

    <div className="blog-page">
    {/* <div className="h1"> جميع المدونات</div> */}
    <div className="phead"> ابقَ مطلعًا على كل جديد في العمل الوقفي وساهم معنا في الفعاليات والمبادرات لبناء أوقاف مستدامة</div>
    <div className="container">

      <div className="box">
        <div className="coverImg">
          <img className="main" src={Imgblog} alt=""/>
          <img className="second" src={share} alt=""/>
          <div className="box-data">
            <div className="num">18</div>
            <div className="month"> May </div>
          </div>
        </div>

        <div className="h2"> استمتع في الحديقه  </div>
        <div className="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div className="bt"> معرفه المزيد </div>
      </div>
      
      <div className="box">
        <div className="coverImg">
          <img className="main" src={Imgblog} alt=""/>
          <img className="second" src={share} alt=""/>
          <div className="box-data">
            <div className="num">18</div>
            <div className="month"> May </div>
          </div>
        </div>

        <div className="h2"> استمتع في الحديقه  </div>
        <div className="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div className="bt"> معرفه المزيد </div>
      </div>

      <div className="box">
        <div className="coverImg">
          <img className="main" src={Imgblog} alt=""/>
          <img className="second" src={share} alt=""/>
          <div className="box-data">
            <div className="num">18</div>
            <div className="month"> May </div>
          </div>
        </div>

        <div className="h2"> استمتع في الحديقه  </div>
        <div className="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div className="bt"> معرفه المزيد </div>
      </div>

      <div className="box">
        <div className="coverImg">
          <img className="main" src={Imgblog} alt=""/>
          <img className="second" src={share} alt=""/>
          <div className="box-data">
            <div className="num">18</div>
            <div className="month"> May </div>
          </div>
        </div>

        <div className="h2"> استمتع في الحديقه  </div>
        <div className="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div className="bt"> معرفه المزيد </div>
      </div>
      
      <div className="box">
        <div className="coverImg">
          <img className="main" src={Imgblog} alt=""/>
          <img className="second" src={share} alt=""/>
          <div className="box-data">
            <div className="num">18</div>
            <div className="month"> May </div>
          </div>
        </div>

        <div className="h2"> استمتع في الحديقه  </div>
        <div className="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div className="bt"> معرفه المزيد </div>
      </div>

      <div className="box">
        <div className="coverImg">
          <img className="main" src={Imgblog} alt=""/>
          <img className="second" src={share} alt=""/>
          <div className="box-data">
            <div className="num">18</div>
            <div className="month"> May </div>
          </div>
        </div>

        <div className="h2"> استمتع في الحديقه  </div>
        <div className="p">الوصول إليها عندما التي تحتاج إلى موارد النظام، يكون النظام في حالة الجديقة.</div>
        <div className="bt"> معرفه المزيد </div>
      </div>

    </div>
  </div>

    <Footer />
    </div>
  )
}

export default Blogs