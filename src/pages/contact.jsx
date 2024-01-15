import React, { useEffect } from 'react'
import Navbar1 from './Navbar'
import ImgSectionFooter from "../assets/bg2.webp"
import ImgSectionContact from "../assets/contactus.webp"


import place from "../assets/place.webp"
import email from "../assets/email.webp"
import phone from "../assets/phone.webp"
import phone2 from "../assets/phone2.webp"
import ImgIntro from "../assets/contact-us.webp"

import user   from "../assets/icon/user.webp"
import email2 from "../assets/icon/email.webp"
import phone3 from "../assets/icon/phone.webp"
import messa  from "../assets/icon/message.webp"
import Footer from '../components/Footer'


const ContactUs = () => {
  // useEffect(_=>{
  //   axios.get('http://localhost/project/wp-json/wp/v2/posts').then(response => console.log(response.data))
  // } ,[])

  return (
    <div id='up'>
    
        <div className="container"> <Navbar1 /> </div>
        <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>

      <div className="contact-page bs-white">
    <div className="container">
      <div className="middle">
        <form action="">
          <div className="h2-right"> انضم إلينا وكن جزءًا من التغيير  </div>
          <div className="phead">  نرحب بالأفراد والمؤسسات للتعاون من أجل مجتمع أوقاف مستدام</div>
          <div className="group"> <img src={user  } alt=""/> <input type="text" name="username" placeholder="اسم المستخدم"/> </div>
          <div className="group"> <img src={email2} alt=""/> <input type="email" name="email" placeholder="البريد الالكتروني"/> </div>
          <div className="group"> <img src={phone3} alt=""/> <input type="text" name="phone" placeholder="رقم الهاتف"/> </div>
          <div className="group"> <img src={messa } alt=""/> <textarea name="message"  placeholder="رساله" ></textarea> </div>
          <div className="bt"> تقديم</div>
        </form>

      </div>
      <div className="left">
        <img src={ImgSectionContact} alt=""/>
        
      </div>
    </div>
    <div className="container">
    <div className="information">
          <div> <img src={place } />  <div className="h2"> 10 A st., Villa 47 Umm Al Sheif, Dubai </div> </div>
          <div> <img src={email } />  <div className="h2">info@bwaqf.ae  </div> </div>
          <div> <img src={phone } />  <div className="h2"> +971554541122 </div> </div>
          <div> <img src={phone2} />  <div className="h2"> +97143339645 </div> </div>
        </div>

    </div>
  </div>

    <Footer />
    </div>
  )
}

export default ContactUs