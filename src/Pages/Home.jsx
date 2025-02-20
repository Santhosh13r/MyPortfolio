import React from 'react'
import { Link } from 'react-router-dom'
import { animate, motion } from 'framer-motion';
import Footer from '../Components/Footer';




const Home = () => {
  return (
    <div>
      <header>
        <nav class="navbar  navbar-dark navbar-expand-lg bg-secondary ">
          <div class="container-fluid">
            <a className="navbar-brand  " href='#'><i class="fa-solid fa-eye p-3"></i>My Blog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto px-5">
                <li class="nav-item px-4">
                  <Link class="nav-link active" to={'/about'}><i class="fa-solid fa-house p-2"></i>About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <body className='body'>

        < div className="container-fluid text-center mt- pt-0">
          <div
            className=" row1 row ">
            <div className="col-6 ">
              <div className="head p-5 m-3">
                <div className="headname">

                  <motion.h1
                    initial={{
                      opacity: 0,
                      scale: 0
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1
                    }}
                    transition={{ duration: 0.8 }}
                  > I'm  <span > Santhosh</span></motion.h1>
                </div>
                < motion.p
                  initial={{
                    opacity: 0,
                    scale: 0
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{ duration: 0.8 }}

                  className='p '>Full Stack Developer skilled in front and back-end development, passionate about crafting responsive,
                  user-focused applications and optimizing performance.</motion.p>
                <button type="button" class="btn btn-outline-danger px-5 mb-5 "> Contact Us</button> <span />
                <button type="button" class="btn btn-outline-info px-5  mb-5">Hring me..</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 pt-5">
          <div className="row ">
            <div className=" exp col-8 algin-self-start">
              <h1>Expriences</h1>
              < motion.p
                initial={{ opacity: 0, translateX: "100%" }} whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1 }}
              >
                <strong>Fb Tech PVT LTD :</strong> <br />
                Undertook a six-month full-stack technology <strong>internship</strong> at Fb Tech, enhancing my skills in frontend and backend development. Worked with technologies such as JavaScript, React, Node.js, and MongoDB, focusing on creating responsive, dynamic web applications. Gained hands-on experience in coding, debugging, and deploying applications, as well as collaborating with a team in an agile environment. Strengthened problem-solving abilities and a deeper understanding of software development lifecycle.
              </motion.p>
            </div>

            < div className=" imagelogo col-4 pt-0 mb-5 img-fluid  shadow-lg p-3 mb-5 bg-body-tertiary rounded object-fit-cover border rounded ">
              <img src="src\assets\Portflio.jpg" alt="exprience" />
            </div>

            <motion.h1>
              <div className="row ex-2 a">
                <div className="col-8 mt-4 ">
                  <h1>
                    Henly Tech pvt ltd
                  </h1>
                  <p className='px-4'>
                    Strong foundation in boostrap and react js framework and build the website,And populer framework "Farmer motion "animation effects using website

                  </p>

                </div>
                <div className="col-3">
                    <h3></h3>

                </div>

              </div>
            </motion.h1>
          </div>
        </div>

        <div className="container-fluid mt-5 text-center">
          <div className="row ">
            <div className=" skillheadline col m-4">
              <h1><b>TECHNOLOGY & TOOLS</b></h1>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="skillrow row ">

            <div className=" skill1 col-4 algin-self-start mt-2 bg-img-none ">
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{ duration: 0.8 }} src="src\assets\javalogo.png" alt="" />
              <hr />
              <ul>
                <li>Fundamental Conpect</li>
                <li>Spring Boot (JDBC Connection,dependency)</li>
                <li>JEE BackEnd</li>
              </ul>
            </div>


            <div className=" skill2 col-4 pb-5 text-center ">
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{ duration: 0.8 }} src="src\assets\reactjs.jpg" alt="" />

              <ul className='pt-3'>
                <li>React js (Hook,reuseable Ui Component)</li>
                <li>React libary (Axios,icon)</li>
                <li> react web application (Libary management,Portflio)</li>
              </ul>
            </div>


            <div className=" skill3 col-4 pb-4 text-end mt-2">
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{ duration: 0.8 }} src="src\assets\deploy.png" alt="" />

              <ul>
                <li>Github (Command,hosting application)</li>
                <li>Docker(container to injection)</li>
                <li>Aws basic conpect</li>
              </ul>
            </div>
          </div>
        </div>
      </body>


      <div className="container-fluid footer-1">
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Home