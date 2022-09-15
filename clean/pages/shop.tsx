import React from 'react'

import Link from 'next/link'
//import Head from 'next/head'
import Image from 'next/image'

import { Nav, Button,Card,Row,Col, } from 'react-bootstrap';

type Props = {}

export default function shop({}: Props) {
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

        
          <section id="hero" style={{background:"#facfd2"}}>

            <div className="container">
              <div className="row d-flex align-items-center">
                <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1" data-aos="fade-right">
                  
                  <h1 style={{color:"black"}}>Shop </h1>
                  <h2 style={{color:"#1d2327"}}>ร้านค้า Project</h2>
                  <h2></h2>

                  <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 hero-img " data-aos="fade-left">   
                  <Image 
                    className="img-fluid"
                    src={"/img/shop/shop_1.png"}  
                    width={500}
                    height={500}
                    layout="fixed"
                    alt=""
                    />
                
                </div>

              </div>

            </div>

          </section>

          <section id="shop" >

            <div className='container'>
              <div className='row'>
                <div className='col-2'>
                  
                </div>
                <div className='col-10'>

                </div>

              </div>

            </div>


          </section>







      


    </div>
    
  )
}