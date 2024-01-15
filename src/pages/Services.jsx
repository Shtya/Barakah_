import React from 'react'
import Navbar1 from './Navbar'
import ImgIntro from "../assets/bgServices.webp"

import Serv1 from "../assets/serv1.webp"
import Serv2 from "../assets/serv2.webp"
import Serv3 from "../assets/serv3.webp"
import Serv4 from "../assets/serv4.webp"
import Serv5 from "../assets/serv5.webp"
import Serv6 from "../assets/serv6.webp"
import Footer from '../components/Footer'

const About = () => {
  return (
    <div id='up' >
    <div className="hero">
        <div className="container"> <Navbar1 /> </div>
        <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>
      </div>

  <div className="services-page">
    <div className="container">

      <div className="box">  
        <img src={Serv1} />
        <div className="text">
          <span />
          <div className="h2-right"> خدمات توعوية وثقافية </div>
          <div className="p"> المحاضرات والندوات: تنظيم محاضرات وندوات لنشر الوعي حول أهمية الوقف وأثره الإيجابي. الدورات التدريبية: تقديم دورات تدريبية لتعزيز المعرفة والمهارات المتعلقة بالأوقاف. وسائل التواصل الاجتماعي: استخدام منصات متنوعة لنشر المعلومات والتفاعل مع الجمهور. المطبوعات والإصدارات العلمية: إصدار مطبوعات تعليمية ودراسات تفصيلية حول الأوقاف. الهيئة الاستشارية: توفير استشارات من خبراء متخصصين في مجال الأوقاف. </div>
        </div>
      </div>

      <div className="box">  
        <img src={Serv2} />
        <div className="text">
          <div className="h2-right"> تنظيم الفعاليات والمبادرات </div>
          <div className="p"> تنظيم الدورات التدريبية: توفير دورات تدريبية متخصصة لتعزيز المعرفة والمهارات اللازمة للعاملين في القطاع غير الربحي ولكل من يرغب في تطوير قدراته في مجال الأوقاف. تنظيم الملتقيات العلمية والمؤتمرات: إقامة ملتقيات علمية ومؤتمرات تجمع الخبراء والمهتمين في مجال الأوقاف لتبادل الأفكار والخبرات والتعريف بأحدث التطورات في القطاع. </div>
        </div>
      </div>

      <div className="box">  
        <img src={Serv3} />
        <div className="text">
        <span />
          <div className="h2-right"> خدمات قانونية </div>
          <div className="p"> الترافع أمام القضاء: تقديم التمثيل القانوني في القضايا المتعلقة بالأوقاف، بالتعاون مع مكاتب شركائنا القانونيين المعتمدين بالدولة توثيق وإثبات الأوقاف: العمل على توثيق الأوقاف وتسجيلها لدى الجهات المختصة، ضمانًا لحقوق الواقفين والمستفيدين خدمات التعقيب والمتابعة: تقديم خدمات التعقيب والمتابعة اللازمة لدى الجهات الحكومية والرسمية فيما يتعلق بالأوقاف إعداد وصياغة الوثيقة الوقفية: مساعدة الواقفين في إعداد وصياغة الوثائق الوقفية بطريقة مهنية ودقيقة </div>
        </div>
      </div>



      <div className="box">  
        <img src={Serv6} />
        <div className="text">
          <div className="h2-right"> إدارة وتطوير الكيانات الوقفية </div>
          <div className="p"> إدارة الأصول الوقفية: إدارة العقارات، المحافظ الاستثمارية، ومؤسسات وشركات وقفية، بطريقة تضمن الاستدامة والكفاءة. إعداد اللوائح التنظيمية والهيكلة الإدارية: تطوير الأنظمة الإدارية واللوائح التنظيمية للكيانات الوقفية. تأسيس وتسجيل الكيانات الوقفية: مساعدة في تأسيس الكيانات الوقفية وتسجيلها وفقًا للمعايير الشرعية والقانونية. إحياء الأوقاف المهملة ومعالجة الأوقاف المتعثرة: توفير حلول مالية وقانونية وشرعية لإحياء الأوقاف المهملة ومعالجة الأوقاف المتعثرة، مع التركيز على إعادة تنشيطها وجعلها أصولًا مثمرة. </div>
        </div>
      </div>

      <div className="box">  
        <img src={Serv4} />
        <div className="text">
          <div className="h2-right"> خدمات استشارية </div>
          <div className="p"> استشارات متخصصة في الأوقاف: تقديم حلول عملية واستشارات متخصصة لمواجهة التحديات في إدارة وتنمية الأوقاف. استشارات حول المنتجات المالية الإسلامية: توفير إرشاد ودعم متوافق مع المعايير الشرعية للتعامل مع المنتجات المالية الإسلامية. </div>
        </div>
      </div>

      <div className="box">  
        <img src={Serv5} />
        <div className="text">
          <div className="h2-right"> عقد مجالس صُلح للمتنازعين في الأوقاف </div>
          <div className="p"> تنظيم مجالس صلح لحل النزاعات والخلافات بين الأطراف المتنازعة أو المستحقين للأوقاف، بطريقة عادلة وفعّالة تضمن الحفاظ على حقوق جميع الأطراف المعنية. </div>
        </div>
      </div>

    </div>
  </div>

   <Footer />
    </div>
  )
}

export default About