import React from 'react'
import Link from 'next/link'
//import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'



import { Nav, Button,Card,Row,Col, } from 'react-bootstrap';

const hero1 : string = "LEARN ABOUT";
const hero2 : string = "ศูนย์กลางการเรียนรู้เกี่ยวกับหุ่นยนต์และระบบอัตโนมัติ";
const hero3 : string = "Robotic And Automation";

type Props = {}

export default function index({}: Props) {

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

          <section id="hero">

            <div className="container">
              <div className="row d-flex align-items-center">
                <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
                  
                  <h1>{hero1}</h1>
                  <h2>{hero2}</h2>
                  <h2>{hero3}</h2>

                  <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">   
              <Image 
                className="img-fluid"
                src={"/img/Logo_Not_Name.png"}  
                width={850}
                height={900}
                layout="responsive"
                alt=""
                />
                
                </div>

              </div>

            </div>

          </section>

        <main id="main">

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

          
        <section id="about" className="about section-bg ">
          <div className="container">

            <div className="row">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
              <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                <div className="content d-flex flex-column justify-content-center ms-5">
                  <h3 data-aos="fade-in" data-aos-delay="100">เรียนหุ่นยนต์ได้อะไร?</h3>
                  <p data-aos="fade-in">
                    เรามาเข้าใจว่าการเรียนเกี่ยวกับ หุ่นยนต์และระบบอัติโนมัติ จะได้อะไรไปบ้าง
                  </p>
                  <div className="row">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="bx bx-receipt"></i>
                      <div className="d-flex justify-content-center">
                      <Image 
                        className="img-fluid" 
                        src="/img/icon_core4/coding.png" 
                        width={80}
                        height={80}
                        layout="fixed"
                        alt=""
                        data-aos="flip-right"
                      />
                      </div>
                      
                      <h4><a href="#">เขียนโปรแกรม(Coding)</a></h4>
                      <p>จะเข้าใจถึงการทำงานของคอมพิวเตอร์และการคิดเป็นลำดับขั้นตอน</p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                      <i className="bx bx-cube-alt"></i>
                      <div className="d-flex justify-content-center">
                      <Image 
                        className="img-fluid" 
                        src="/img/icon_core4/physics.png" 
                        width={80}
                        height={80}
                        layout="fixed"
                        alt=""
                        data-aos="flip-right"
                      />
                      </div>
                      <h4><a href="#">ฟิสิกส์พื้นฐาน(Basic Physics)</a></h4>
                      <p>ดูเหมือนยากนะ!! แต่บทเรียนนี้จะทำให้เราเข้าใจของหลักมันจริงๆ หลักสูตรเราแม้จะอยู่ป.1 ยังสามารถเข้าใจหลักการได้โดยไม่ต้องมาคำนวณให้ปวดหัว  </p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                      <i className="bx bx-images"></i>
                      <div className="d-flex justify-content-center">
                      <Image 
                        className="img-fluid" 
                        src="/img/icon_core4/electrical-circuit.png" 
                        width={80}
                        height={80}
                        layout="fixed"
                        alt=""
                        data-aos="flip-right"
                      />
                      </div>
                      
                      <h4><a href="#">อิเล็กทรอนิกส์เบื้องต้น<br></br>(Basic Electronic)</a></h4>
                      <p>นับเป็นเรื่องยากเพราะเราไม่สามารถมองเห็นไฟฟ้าได้ แต่ในหลักสูตรนี้เราจะทำให้เข้าใจกับอุปกร์ไฟฟ้าต่างๆ และการทำงานของไฟฟ้าที่ไม่ต้องคำนวณให้หัวปวด</p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                      <i className="bx bx-shield"></i>
                      <div className="d-flex justify-content-center">
                      <Image 
                        className="img-fluid" 
                        src="/img/icon_core4/project.png" 
                        width={80}
                        height={80}
                        layout="fixed"
                        alt=""
                        data-aos="flip-right"
                      />
                      </div>
                      <h4><a href="#">โปรเจค(project)</a></h4>
                      <p>ใช่แล้ว บทเรียนนี้จะมาเป็นที่ปลดปล่อยความรู้ที่เรียนมาทั้งหมด มาสร้างโปรเจคของเรา 
                        จะเป็นการได้ประยุกต์ใช้ความรู้ได้อย่างเต็มที่
                      </p>
                    </div>
                  </div>
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

  
    <section id="features" className="features section-bg">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-in">แนวทางของเรา</h2>
          <p data-aos="fade-in">ทางเราจะเน้นการสอนที่เห็นภาพและเข้าใจถึงหลักการและใช้สื่อที่น่าสนใจในการสอน</p>
        </div>

        <div className="row content">
          <div className="col-md-5" data-aos="fade-right">
          <Image 
                className="img-fluid" 
                src="/img/services/online.jpg" 
                width={500}
                height={450}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
          </div>
          <div className="col-md-7 pt-4" data-aos="fade-left">
            <h3>การเรียนหุ่นยนต์ต้อง ≠ คนรวย</h3>
            <p className="font-italic">
              เราอยากทำให้หุ่นยนต์สามารถเข้าถึงคนทุกชนชั้นได้ตั้งแต่รวย-จน
              เนื่องจากการเรียนหุ่นยนต์ของประเทศไทย นั้นยังมีราคาที่สูงอยู่ที่คลอสละประมาณ 4,000 -8,000 บาท/คลอสเรียน(5-8 ครั้ง ครั้งละ 2ชั่วโมง)
              ซึ่งไม่มีทางที่เด็กทุกคนจะเข้าถึงเนื้อหาหุ่นยนต์ได้เลย 
              เราจึงทำเเพลตฟอร์มออนไลน์ไว้ให้สำหรับเรียน Robot ที่เริ่มต้นไม่เกิน 1พันบาท สำหรับผู้ปกครองหรือน้องๆที่สนใจในด้านหุ่นยนต์ </p>
            <ul>
              <li><i className="icofont-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="icofont-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            </ul>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
          <Image 
                className="img-fluid" 
                src="/img/services/online.jpg" 
                width={500}
                height={450}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
            <h3>เรียนแบบทำโปรเจค?</h3>
            <p className="font-italic">
              ทางเราจะเน้นการประยุกต์ใช้ความรู้มาทำโปรเจคซึ่งเป็นทางเลือกนึงในการ วัดผลความรู้ที่ได้ซึ่งจะทำให้น้องๆรู้ถึงการนำความรู้ไปใช้ที่มากกว่าการจำไปสอบ
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5" data-aos="fade-right">
          <Image 
                className="img-fluid" 
                src="/img/services/online.jpg" 
                width={500}
                height={450}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
          </div>
          <div className="col-md-7 pt-5" data-aos="fade-left">
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i className="icofont-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="icofont-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="icofont-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
            </ul>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-5 order-1 order-md-2" data-aos="fade-left">
          <Image 
                className="img-fluid" 
                src="/img/services/online.jpg" 
                width={500}
                height={450}
                layout="fixed"
                alt=""
                data-aos="flip-right"
              />
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1" data-aos="fade-right">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>

    
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-in">Portfolio</h2>
          <p data-aos="fade-in">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
            <Image 
                className="img-fluid" 
                src="/img/port/port1.jpg" 
                width={350}
                height={250}
                layout="fixed"
                alt=""
              />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="icofont-plus-circle"></i></a>
                <a href="#" title="More Details"><i className="icofont-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
            <Image 
                className="img-fluid" 
                src="/img/port/port2.jpg" 
                width={350}
                height={250}
                layout="fixed"
                alt=""
              />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
                <a href="#" title="More Details"><i className="icofont-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
            <Image 
                className="img-fluid" 
                src="/img/port/port3.jpg" 
                width={350}
                height={250}
                layout="fixed"
                alt=""
              />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="icofont-plus-circle"></i></a>
                <a href="#" title="More Details"><i className="icofont-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
            <Image 
                className="img-fluid" 
                src="/img/port/port4.jpg" 
                width={350}
                height={250}
                layout="fixed"
                alt=""
              />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="icofont-plus-circle"></i></a>
                <a href="#" title="More Details"><i className="icofont-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
            <Image 
                className="img-fluid" 
                src="/img/port/port5.jpg" 
                width={350}
                height={250}
                layout="fixed"
                alt=""
              />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="icofont-plus-circle"></i></a>
                <a href="#" title="More Details"><i className="icofont-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
            <Image 
                className="img-fluid" 
                src="/img/port/port6.jpg" 
                width={350}
                height={250}
                layout="fixed"
                alt=""
              />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="icofont-plus-circle"></i></a>
                <a href="#" title="More Details"><i className="icofont-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
            <Image 
                className="img-fluid" 
                src="/img/port/port7.jpg" 
                width={350}
                height={250}
                layout="fixed"
                alt=""
              />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="icofont-plus-circle"></i></a>
                <a href="#" title="More Details"><i className="icofont-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
            <Image 
                className="img-fluid" 
                src="/img/port/port8.jpg" 
                width={350}
                height={250}
                layout="fixed"
                alt=""
              />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="icofont-plus-circle"></i></a>
                <a href="#" title="More Details"><i className="icofont-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
            <Image 
                className="img-fluid" 
                src="/img/port/port9.jpg" 
                width={350}
                height={250}
                layout="fixed"
                alt=""
              />
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-plus-circle"></i></a>
                <a href="#" title="More Details"><i className="icofont-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

   
    <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <h2 data-aos="fade-in">Team</h2>
          <p data-aos="fade-in">เก่งไม่มากท่ายากทุกคน</p>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up">
              <div className="pic"> 
              <Image 
                className="img-fluid" 
                src="/img/team/Loy.jpg" 
                width={250}
                height={250}
                layout="fixed"
                alt=""
              /></div>
              <h4>Bualoy Creampie</h4>
              <span>Chief Executive Officer</span>
              <div className="social">
                <a href=""><i className="icofont-twitter"></i></a>
                <a href=""><i className="icofont-facebook"></i></a>
                <a href=""><i className="icofont-instagram"></i></a>
                <a href=""><i className="icofont-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="pic">
              <Image 
                className="img-fluid" 
                src="/img/team/Clean.jpg" 
                width={250}
                height={250}
                layout="fixed"
                alt=""
              />
              </div>
              <h4>Clean Robert</h4>
              <span>Product Manager</span>
              <div className="social">
                <a href=""><i className="icofont-twitter"></i></a>
                <a href=""><i className="icofont-facebook"></i></a>
                <a href=""><i className="icofont-instagram"></i></a>
                <a href=""><i className="icofont-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="200">
              <div className="pic">
              <Image 
                className="img-fluid" 
                src="/img/team/Nai.jpg" 
                width={250}
                height={250}
                layout="fixed"
                alt=""
              />
                
              </div>
              <h4>Nai Willson</h4>
              <span>CTO</span>
              <div className="social">
                <a href=""><i className="icofont-twitter"></i></a>
                <a href=""><i className="icofont-facebook"></i></a>
                <a href=""><i className="icofont-instagram"></i></a>
                <a href=""><i className="icofont-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="member" data-aos="fade-up" data-aos-delay="300">
              <div className="pic">
              <Image 
                className="img-fluid" 
                src="/img/team/CEO.jpg" 
                width={250}
                height={250}
                layout="fixed"
                alt=""
              />
              </div>
              <h4>Jonh Milf</h4>
              <span>Accountant</span>
              <div className="social">
                <a href=""><i className="icofont-twitter"></i></a>
                <a href=""><i className="icofont-facebook"></i></a>
                <a href=""><i className="icofont-instagram"></i></a>
                <a href=""><i className="icofont-linkedin"></i></a>
              </div>
            </div>
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

  
    








          
  </main>

        <div id="scene">
                    <Image 
                    className="img-fluid hero-bg-1 up-down-animation" 
                    src="/img/background-shape/feature-bg-2.png" 
                    width={95}
                    height={95}
                    layout="fixed"
                    alt=""
                    />
                    
                    <Image 
                    className="img-fluid hero-bg-2 left-right-animation" 
                    src="/img/background-shape/seo-ball-1.png" 
                    width={48}
                    height={48}
                    layout="fixed"
                    alt="" 
                    />
                    <Image 
                    className="img-fluid hero-bg-3 left-right-animation" 
                    src="/img/background-shape/seo-half-cycle.png" 
                    width={149}
                    height={112}
                    layout="fixed"
                    alt=""
                    />
                    <Image 
                    className="img-fluid hero-bg-4 up-down-animation" 
                    src="/img/background-shape/green-dot.png" 
                    width={70}
                    height={70}
                    layout="fixed"
                    alt=""
                    />
                    <Image 
                    className="img-fluid hero-bg-5 left-right-animation" 
                    src="/img/background-shape/blue-half-cycle.png" 
                    width={110}
                    height={110}
                    layout="fixed"
                    alt="" />
                    <Image 
                    className="img-fluid hero-bg-6 up-down-animation" 
                    src="/img/background-shape/seo-ball-1.png" 
                    width={125}
                    height={125}
                    layout="fixed"
                    alt=""
                    />
                    <Image 
                    className="img-fluid hero-bg-7 left-right-animation" 
                    src="/img/background-shape/yellow-triangle.png" 
                    width={85}
                    height={85}
                    layout="fixed"
                    alt=""
                    />
                    <Image 
                    className="img-fluid hero-bg-8 up-down-animation" 
                    src="/img/background-shape/service-half-cycle.png" 
                    width={79}
                    height={96}
                    layout="fixed"
                    alt=""
                    />
                    <Image 
                    className="img-fluid hero-bg-9 up-down-animation" 
                    src="/img/background-shape/team-bg-triangle.png" 
                    width={104}
                    height={104}
                    layout="fixed"
                    alt=""
                    />
                </div>

          
          
    
    </div>
   

    
  )
}