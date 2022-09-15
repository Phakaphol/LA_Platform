import React from 'react'
import Link from 'next/link'
//import Head from 'next/head'
import Image from 'next/image'

import { Nav, Button,Card,Row,Col, } from 'react-bootstrap';

type Props = {}

export default function course({}: Props) {
  return (
    <div>

      
<Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-xl">
              <Link href="/">
                <a className="navbar-brand">LA</a>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample07XL">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active ms-3">
                    <Link href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/course">
                      <a className="nav-link">Course</a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/shop">
                      <a className="nav-link">Shop</a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/Business">
                      <a className="nav-link">Business</a>
                    </Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link href="/write">
                      <a className="nav-link">Login</a>
                    </Link>
                  </li>

                </ul>

              </div>
            </div>
          </Nav>

          <section id="hero" style={{background:"black"}}>

            <div className="container">
              <div className="row d-flex align-items-center">
                <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
                  
                  <h1>Course </h1>
                  <h2>คลอสเรียนคุณภาพ</h2>
                  <h2></h2>

                  <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 hero-img " data-aos="fade-left">   
                  <Image 
                    className="img-fluid"
                    src={"/img/course/P1.png"}  
                    width={500}
                    height={500}
                    layout="fixed"
                    alt=""
                    />
                
                </div>

              </div>

            </div>

          </section>

          <section id="features" className="features section-bg mt-5">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-in">เราเรียนยังไง?</h2>
          <p data-aos="fade-in">กรุณาอ่านก่อนเพื่อให้เข้าใจถึงการเรียนของเรา</p>
        </div>

        <div className="row content">
          <div className="col-md-5" data-aos="fade-right">
          <Image 
                className="img-fluid" 
                src="/img/course/LV.png" 
                width={480}
                height={200}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
          </div>
          <div className="col-md-7 pt-4" data-aos="fade-left">
            <h3>แบ่งเป็น 10 level</h3>
            <p className="font-italic">
               พี่ๆจะมีแบบทดสอบเพื่อเลือก Level ให้ตรงกับน้องๆเพื่อการเรียนรู้ที่เหมาะกับน้องๆ
            </p>
            <ul>
              <li><i className="icofont-check"></i> L1-L3 : สำหรับน้องๆอายุ 7-9 ปี หรือ น้องๆที่ไม่เคยเรียน Robot มาก่อน</li>
              <li><i className="icofont-check"></i> L4-L6 : สำหรับน้องๆอายุ 10-12 ปี หรือ น้องๆที่มีพื้นฐานเบื้องต้นอยู่แล้ว</li>
              <li><i className="icofont-check"></i> L7-L9 : สำหรับน้องๆอายุ 13-14 ปี หรือ น้องๆที่มีประสบการ์การเรียน Robot</li>
              <li><i className="icofont-check"></i> L10 : สำหรับน้องๆอายุ 15 ปีขึ้นไป หรือ น้องๆที่เข้าใจถึงหลักการของ Robot จริงๆ</li>
            </ul>
            <h3>ลองทำแบบทดสอบ</h3> 
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
          <Image 
                className="img-fluid" 
                src="/img/course/How.png" 
                width={450}
                height={450}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
            <h3>สื่อที่ใช้</h3>
            <p className="font-italic">
              พวกพี่จะให้ความสำคัญกับสื่อที่ใช้ในการสอนเป็นอย่างมาก เพื่อไม่ให้น่าเบื่อ 
            </p>

            <ul>
              <li><i className="icofont-check"></i> การเรียนจะเป็นการดู Video สั้นไม่เกิน 3 นาที </li>
              <li><i className="icofont-check"></i> ทำแบบฝึกหัดถาม-ตอบ จากเนื้อหาที่เรียน </li>
              <li><i className="icofont-check"></i> ทำ mini project ของตัวเอง จากความรู้ที่ได้มา </li>
            </ul>
            
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5" data-aos="fade-right">
          <Image 
                className="img-fluid" 
                src="/img/icon_core4/project.png" 
                width={380}
                height={380}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
          </div>
          <div className="col-md-7 pt-5" data-aos="fade-left">
            <h3>ทำไมต้องทำ Project ?</h3>
            <p>เมื่อเรียนจบ 1 lesson จะมี mini project ให้น้องๆทำ เมื่อน้องๆทำโปรเจคเสร็จแล้ว สามารถนำกับมาให้ทางเราเพื่อนำไปบริจาคให้เด็กยากไร้อีก 1 ต่อ</p>
           
          </div>
        </div>

        

        

      </div>
    </section>

    
    <section id="pricing" className="pricing section-bg">
      <div className="container">

        <div className="section-title ">
          <h2 data-aos="fade-in" className='d-flex justify-content-center'>Subscribe</h2>
          <p data-aos="fade-in" className='d-flex justify-content-center'>.....Pricing.....</p>
        </div>

        <div className="row no-gutters mt-3 mb-5">

          <div className="col-lg-4 box" data-aos="zoom-in">
            <h3>Free</h3>
            <h4>$0 Bath<span>per month</span></h4>
            <ul>
              <li><i className="bx bx-check"></i>ทดลองเรียนฟรี</li>
              <li><i className="bx bx-check"></i>ส่วนลด 5% เมื่อซื้อ 500 บาทขึ้นไป</li>
            </ul>
            <a href="#" className="get-started-btn">Get Started</a>
          </div>

          <div className="col-lg-4 box featured" data-aos="zoom-in">
            <span className="featured-badge">Featured</span>
            <h3>Business</h3>
            <h4>$299 Bath<span>per month</span></h4>
            <ul>
              
              <li><i className="bx bx-check"></i>เมื่อเรียนจบ 1 level จะได้ใบประกาศรับรองผลจาก ดร.คลีน</li>
              <li><i className="bx bx-check"></i>รับส่วนลด 10% ในการซื้อของทำโปรเจค</li>
              <li><i className="bx bx-check"></i>นำแต้มจากการเรียนเเลกชิ้นส่วนทำโปรเจคได้</li>
              <li><i className="bx bx-check"></i> ระบบติดตามความคืบหน้าของทุกคน</li>
            </ul>
            <a href="#" className="get-started-btn">Get Started</a>
          </div>

          <div className="col-lg-4 box" data-aos="zoom-in">
            <h3>Developer</h3>
            <h4>$999 Bath<span>per 3month</span></h4>
            <ul>
            
              <li><i className="bx bx-check"></i>เมื่อเรียนจบ 1 level จะได้ใบประกาศรับรองผลจาก ดร.คลีน</li>
              <li><i className="bx bx-check"></i>รับส่วนลด 10% ในการซื้อของทำโปรเจค</li>
              <li><i className="bx bx-check"></i>นำแต้มจากการเรียนเเลกชิ้นส่วนทำโปรเจคได้</li>
              <li><i className="bx bx-check"></i> ระบบติดตามความคืบหน้าของทุกคน</li>
              <li><i className="bx bx-check"></i> รับของทำโปรเจคฟรีตลอด 3 เดือน  </li>

            </ul>
            <a href="#" className="get-started-btn">Get Started</a>
          </div>

        </div>

      </div>
    </section>
    <footer id="footer">

    <div className="footer-top">

      <div className="container" data-aos="fade-up">

        <div className="row  justify-content-center">
          <div className="col-lg-6">
            <h3></h3>
            <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          </div>
        </div>

        <div className="row footer-newsletter justify-content-center">
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email" placeholder="Enter your Email" /><input type="submit" value="Subscribe" />
              
            </form>
          </div>
        </div>

        <div className="social-links">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>

      </div>
    </div>

    <div className="container footer-bottom clearfix">
      <div className="copyright">
        &copy; Copyright <strong><span>LearnAbout</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>

          

        
      


    </div>
    
  )
}