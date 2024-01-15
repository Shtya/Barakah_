import React from 'react'
import ImgSection3 from "../assets/Footer-01.webp"
import ImgSectionContact from "../assets/contactus.webp"
import Navbar1 from './Navbar'
import ImgIntro from "../assets/bgHome.webp"
import Footer from '../components/Footer'


import { useNavigate } from 'react-router-dom'

import user  from "../assets/icon/user.webp"
import email from "../assets/icon/email.webp"
import phone from "../assets/icon/phone.webp"
import messa from "../assets/icon/message.webp"
import Partners from '../components/Partners'
import Blog from '../components/Blog'

const Home = () => {
  const Navigate = useNavigate()

  return (
    <div className='all' id='up'>
      <div className="hero">
        <div className="container"> <Navbar1 /> </div>
        <div className="coverIntro hidden-img"> <img src={ImgIntro} alt="intro page contains word 'about us '" /></div>
      </div>
      
      <div className="section1">
        <div className="container">
          <div className="boxes">
            <div className="coverImg"> <img src="https://iili.io/J7eDZMP.webp" alt=""/> </div>
            <div className="box">
              <div className="h1-right">مركز بركة الوقف</div>
              <div className="p">مؤسسة رائدة في مجال الأوقاف، تأسست برؤية لخدمة الواقفين و النظّار وجميع المهتمين بالأوقاف. نتبنى في مركزنا نهجًا مؤسسيًا معتمدًا على المنهجية العلمية لنشر ثقافة الوقف وتعزيز مفهوم الاستدامة في المجتمع. 
                نسعى دائمًا لأن يكون مركزنا رائدًا للعمل الوقفي في الإمارات، مع التزامنا بتقديم خدمات على أعلى مستوى من الكفاءة والجودة.
                نحرص على متابعة وتحليل الفرص والتحديات التي تواجه الأوقاف، ليكون مركز بركة الوقف هو الوجهة المثالية لكل من يسعى لفهم وتطبيق مفاهيم الوقف بطريقة عصرية وفعّالة.
                </div>
            </div>
          </div>
        </div>
      </div>

  <div className="section2 bs-white">
    <div className="h1"> الأهداف </div>
    <div className="container">

      <div className="boxs boxs1">
        <div className="box">
          <div className="icon"> <span></span> <img src="https://iili.io/J7kEJkB.webp" alt=""/></div>
          <div className="text">
            <div className="h2-right"> الريادة والتميز في العمل الوقفي            </div>
            <div className="p">  يهدف مركز بركة الوقف إلى أن يصبح المعيار الأعلى للأوقاف، بترسيخ مكانته كمؤسسة رائدة على الساحتين المحلية والدولية، وذلك من خلال توفير خدمات استثنائية تدفع بعجلة التقدم والابتكار في القطاع الوقفي            </div>
          </div>
        </div>

        <div className="box">
          <div className="icon"> <span></span> <img src="https://iili.io/J7kEJkB.webp" alt=""/></div>
          <div className="text">
            <div className="h2-right"> تعزيز كفاءة النظّار            </div>
            <div className="p"> نسعى إلى تمكين النظّار من خلال تطوير مهاراتهم وبناء قدراتهم الإدارية، لضمان تحقيق الاستدامة والكفاءة العالية في إدارة الأوقاف، ما يضمن الاستثمار الأمثل للموارد            </div>
          </div>
        </div>
      </div>

      <div className="coverImg"> <img src="https://iili.io/J7kq9EJ.webp" alt=""/>  </div>

      <div className="boxs">
        <div className="box">
          <div className="icon"> <span></span> <img src="https://iili.io/J7kEJkB.webp" alt=""/></div>
          <div className="text">
            <div className="h2-right"> التوعية والمساهمة المجتمعية            </div>
            <div className="p"> نستهدف توعية المجتمع بأهمية الأوقاف ودورها الفاعل في التنمية، مشجعين الأفراد على المساهمة الإيجابية والمشاركة الفعّالة في الأعمال الوقفية
            </div>
          </div>
        </div>
        <div className="box">
          <div className="icon"> <span></span> <img src="https://iili.io/J7kEJkB.webp" alt=""/></div>
          <div className="text">
            <div className="h2-right"> الدعم ونشر المعرفة            </div>
            <div className="p"> نلتزم بتقديم الدعم اللازم للواقفين في تأسيس وتوثيق أوقافهم، وكذلك نشر المعرفة المتعلقة بالأحكام الشرعية والأنظمة المتعلقة بالأوقاف. ونسعى إلى تعميم ثقافة الوقف والمنتجات المالية الإسلامية بمساعدة خبراء وأكاديميين متخصصين            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div className="section3">
    <div className="coverImg"> <img src={ImgSection3} alt=""/> </div>
    <div className="container">
      <div className="p"> مركز بركة الوقف يحمل رؤية رائدة نحو تحقيق استدامة الأوقاف، مستشرفًا مستقبلًا واعدًا حيث تصبح الأوقاف ركيزة للتنمية الشاملة. وتتجلى رسالتنا في الارتقاء بالقطاع غير الربحي، متمثلة في نشر ثقافة الوقف وتحقيق استدامة الأصول الوقفية. نعمل بجدية وتفانٍ لتقديم خدمات احترافية تضمن نماء الأوقاف، بدعم من كادر من المختصين المؤهلين، الذين يتميزون بالخبرة والكفاءة في إدارة وتنمية الأوقاف. </div>
    </div>
  </div>

  <div className="services">
    <div className="container">
      <div className="h1">خدماتنا</div>
      <div className="boxes">

        <div className="box">  
          <div className="icon"> <img src="https://iili.io/J7kOyOb.webp" /> </div> 
          <div className="text">   
            <div className="h2-right"> خدمات توعوية وثقافية </div>  
            <div className="p"> نعمل على توعية المجتمع بأهمية الأوقاف من خلال تقديم محاضرات وندوات معرفية، ودورات تدريبية متخصصة، إضافةً إلى نشر المحتوى عبر وسائل التواصل الاجتماعي وإصدارات علمية دقيقة ننظم أيضًا مجالس للنقاش والتبادل الفكري، ونوفر استشارات عبر الهاتف وموقعنا الرسمي، كل ذلك يسهم في تعزيز مفهوم الوقف كركيزة أساسية للتنمية المستدامة </div>  
          </div>  
        </div>
        

        <div className="box">  
          <div className="icon"> <img src="https://iili.io/J7kOmJe.webp" /> </div> 
          <div className="text">   
            <div className="h2-right"> تنظبم الفاعليات والمبادرات  </div>  
            <div className="p"> نسعى لتنظيم مجموعة متنوعة من الفعاليات والمبادرات التي تشمل دورات تدريبية، ملتقيات علمية، ومؤتمرات. هذه الأنشطة تهدف إلى توسيع الأفق المعرفي للعاملين في القطاع غير الربحي وكذلك لكل من يرغب في تطوير قدراته الشخصية والمهنية من أجل خدمة الأوقاف بشكل أكثر فعالية </div>  
          </div>  
        </div>
        

        <div className="box">  
          <div className="icon"> <img src="https://iili.io/J7kOp5u.webp" /> </div> 
          <div className="text">   
            <div className="h2-right"> خدمات قانونية </div>  
            <div className="p"> نقدم مجموعة متكاملة من الخدمات القانونية بالتعاون مع مكاتب شركائنا المعتمدين، تشمل الترافع أمام القضاء، توثيق وإثبات الأوقاف وتسجيلها لدى الجهات المختصة، خدمات التعقيب والمتابعة الحكومية، وإعداد وصياغة الوثائق الوقفية، لضمان حقوق ومصالح كل من يتعامل مع الأوقاف </div>  
          </div>  
        </div>
        

        <div className="box">  
          <div className="icon"> <img src="https://iili.io/J7keJzx.webp" /> </div> 
          <div className="text">   
            <div className="h2-right"> خدمات استشارية </div>  
            <div className="p"> نوفر استشارات متخصصة وحلولًا عملية للمشاكل المتعلقة بالأوقاف والمنتجات المالية الإسلامية، لتلبية الاحتياجات المحددة وضمان التوافق مع المعايير الشرعية </div>  
          </div>  
        </div>
        
        <div className="box">  
          <div className="icon"> <img src="https://iili.io/J7kedWQ.webp" /> </div> 
          <div className="text">   
            <div className="h2-right"> عقد مجالس الصلح </div>  
            <div className="p"> ننظم مجالس الصلح لتسوية النزاعات وحل الخلافات بين المتنازعين أو المستحقين للأوقاف، بهدف الوصول إلى حلول عادلة تضمن حقوق جميع الأطراف </div>  
          </div>  
        </div>
        

        <div className="box">  
          <div className="icon"> <img src="https://iili.io/J7ke9bj.webp" /> </div> 
          <div className="text">   
            <div className="h2-right"> إدارة وتطوير الكيانات الوقفية </div>  
            <div className="p"> نقدم مجموعة واسعة من الخدمات التي تشمل إدارة الأصول الوقفية مثل العقارات، المحافظ الاستثمارية، والمؤسسات والشركات الوقفية، إعداد اللوائح التنظيمية والهيكلة الإدارية والوصف الوظيفي للكيانات، تأسيس الكيانات الوقفية وتسجيلها، بالإضافة إلى إحياء الأوقاف المهملة ومعالجة الأوقاف المتعثرة، مع تقديم حلول مالية، شرعية وقانونية فعّالة لها </div>  
          </div>  
        </div>
        
      </div>
        <a href="/services" className="bt"> اعرف المزيد </a>
    </div>
  </div>

  <Partners />

  <Blog />

  <div className="contact bs-white">
    <div className="container">
      <div className="right"> <img src="https://iili.io/J7koZW7.webp" alt=""/> </div>
      <div className="middle">
        <div className="h2-right"> انضم إلينا وكن جزءًا من التغيير  </div>
        <div className="phead">  نرحب بالأفراد والمؤسسات للتعاون من أجل مجتمع أوقاف مستدام</div>
        <form action="">
          <div className="group"> <img src={ user } alt=""/> <input type="text" name="username" placeholder="اسم المستخدم"/> </div>
          <div className="group"> <img src={ email} alt=""/> <input type="email" name="email" placeholder="البريد الالكتروني"/> </div>
          <div className="group"> <img src={ phone} alt=""/> <input type="text" name="phone" placeholder="رقم الهاتف"/> </div>
          <div className="group"> <img src={ messa} alt=""/> <textarea name="message"  placeholder="رساله" ></textarea> </div>
          <div className="bt"> تقديم</div>
        </form>
      </div>
      <div className="left">
        <img src={ImgSectionContact} alt=""/>
      </div>
    </div>
  </div>


  <Footer />

</div>
  )
}

export default Home