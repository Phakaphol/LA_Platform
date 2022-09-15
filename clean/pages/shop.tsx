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

        <h1>GGGGGG</h1>
        <h2>4444</h2>






      


    </div>
    
  )
}