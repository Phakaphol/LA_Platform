import React from 'react'
import Link from 'next/link'
//import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'



import { Nav, Button,Card,Row,Col, } from 'react-bootstrap';

type Props = {}

export default function Business({}: Props) {
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
                    <Link href="/login">
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
              
              <h1>Business </h1>
              <h2>สำหรับองการ์</h2>
              <h2></h2>

              <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 hero-img " data-aos="fade-left">   
              <Image 
                className="img-fluid"
                src={"/img/business/business_1.png"}  
                width={500}
                height={500}
                layout="fixed"
                alt=""
                />
            
            </div>

          </div>

        </div>

        </section>

        <section id="clients" className="clients section-bg">
            <div className="container">

              <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

                <div className="col-lg-2 col-md-4 col-6">
                  <div className="client-logo">
                    <Image 
                    className="img-fluid" 
                    src="/img/clients-logo/Say.png" 
                    width={80}
                    height={80}
                    layout="fixed"
                    alt=""
                    data-aos="flip-right"
                    />

                  </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                  <div className="client-logo">
                  <Image 
                    className="img-fluid" 
                    src="/img/clients-logo/Sown.png" 
                    width={80}
                    height={80}
                    layout="fixed"
                    alt=""
                    data-aos="flip-right"
                    />
                  </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                  <div className="client-logo">
                  <Image 
                    className="img-fluid" 
                    src="/img/clients-logo/TB.png" 
                    width={80}
                    height={90}
                    layout="fixed"
                    alt=""
                    data-aos="flip-right"
                    />
                  </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                  <div className="client-logo">
                  <Image 
                    className="img-fluid" 
                    src="/img/clients-logo/Say.png" 
                    width={80}
                    height={80}
                    layout="fixed"
                    alt=""
                    data-aos="flip-right"
                    />
                  </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                  <div className="client-logo">
                  <Image 
                    className="img-fluid" 
                    src="/img/clients-logo/Say.png" 
                    width={80}
                    height={80}
                    layout="fixed"
                    alt=""
                    data-aos="flip-right"
                    />
                  </div>
                </div>

                <div className="col-lg-2 col-md-4 col-6">
                  <div className="client-logo">
                  <Image 
                    className="img-fluid" 
                    src="/img/clients-logo/Say.png" 
                    width={80}
                    height={80}
                    layout="fixed"
                    alt=""
                    data-aos="flip-right"
                    />
                  </div>
                </div>

              </div>

            </div>
          </section>

          <section id="services" className="services section-bg mt-2">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-in">Services</h2>
          <p data-aos="fade-in">ทางเรามีบริการตั้งแต่ระดับบุคคลทั่วไปจนถึงระดับองกรค์</p>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
            <div className="card">
              <div className="card-img">
              <Image 
                className="img-fluid" 
                src="/img/services/help.jpg" 
                width={650}
                height={450}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">จัดสอนฟรีสำหรับโรงเรียนด้อยโอกาส</a></h5>
                <p className="card-text">ทางเราจะจัดกิจกรรมสอนฟรีและบริจาคสิ่งของที่เด็กขาด ให้กับโรงเรียนที่ด้อยโอกาสที่ทางเราตรวจสอบผ่านการหาเองและที่ทุกคนเสนอมา ตามลำดับเดือนละ1ครั้ง</p>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
            <div className="card">
              <div className="card-img">
              <Image 
                className="img-fluid" 
                src="/img/services/help2.jpg" 
                width={650}
                height={450}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">เปิดอบรมหุ่นยนต์</a></h5>
                <p className="card-text">อบรมเนื้อหาเกี่ยวกับเรื่อง Robot&Automation(หัวข้อเปลี่ยนทุก1เดือน) ให้กับผู้ที่ลงทะเบียนและชำระเงินในระบบของเรา</p>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>

          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-right">
            <div className="card">
              <div className="card-img">
              <Image 
                className="img-fluid" 
                src="/img/services/sale.jpg" 
                width={650}
                height={450}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">จัดซื้อ</a></h5>
                <p className="card-text">ทางเราขายชิ้นส่วนในการทำโปรเจคเล็กๆ สำหรับน้องๆ รวมถึงจัดซื้อทุกอย่างและตกแต่งภายในสำหรับองค์กร</p>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-left">
            <div className="card">
              <div className="card-img">
              <Image 
                className="img-fluid" 
                src="/img/services/online.jpg" 
                width={650}
                height={450}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">เรียนออนไลน์</a></h5>
                <p className="card-text">เรามีคลอสเรียนสนุกๆ ตื่นเต้น เร้าใจ เหมือนเเม่จับได้ตอนชักเว่า เกี่ยวกับRobot&Automation ที่มากกว่านั่งดูคลิปและทำสอบ</p>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


    
    </div>
    
  )
}