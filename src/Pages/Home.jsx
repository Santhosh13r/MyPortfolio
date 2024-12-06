import React from 'react'
import { Link } from 'react-router-dom'




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
                  <Link class="nav-link active" to = {'/about'}><i class="fa-solid fa-house p-2"></i>About</Link>
                </li>
                 
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <body>

        <div className="container-fluid text-center mt- pt-0">
          <div className=" row1 row ">
            <div className="col-6  ">
              <div className="head p-5 m-3">
                <h1 className='headname'> I'm Santhosh</h1>
                <p className='p '>Full Stack Developer skilled in front and back-end development, passionate about crafting responsive,
                  user-focused applications and optimizing performance.</p>
                <button type="button" class="btn btn-outline-danger px-5 mb-5 ">Contact Us</button> <span />
                <button type="button" class="btn btn-outline-info px-5  mb-5">Hring me..</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 pt-5">
          <div className="row ">
            <div className=" exp col-8 algin-self-start">
              <h1>Expriences</h1>
              <p >
                <strong>MERCELLO TECH PVT LTD :</strong> <br />
                Undertook a one-month full-stack technology <strong>internship</strong> at Mercello Tech, enhancing my skills in frontend and backend development. Worked with technologies such as JavaScript, React, Node.js, and MongoDB, focusing on creating responsive, dynamic web applications. Gained hands-on experience in coding, debugging, and deploying applications, as well as collaborating with a team in an agile environment. Strengthened problem-solving abilities and a deeper understanding of software development lifecycle.
              </p>

            </div>
            <div className=" imagelogo col-4 pt-0 mb-5 img-fluid  shadow-lg p-3 mb-5 bg-body-tertiary rounded object-fit-cover border rounded">
              <img src="src\assets\Portflio.jpg" alt="exprience" />
            </div>
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
              <img src="src\assets\javalogo.png" alt="" />
              <p>Fundamental conpect  <br />
                Spring boot ,JDBC connectivty  <br />
                object oriented Programming</p>
            </div>
            <div className=" skill2 col-4 pb-5 text-center ">
              <img src="src\assets\reactjs.jpg" alt="" />
              <p>React basic conpect  <br />
                Hooks ,dependiences <br />
                react based portfolio project</p>
            </div>
            <div className=" skill3 col-4 pb-4 text-end mt-2">
              <img src="src\assets\deploy.png" alt="" />
              <p>Github and Docker conpect  <br />
                Spring boot ,JDBC connectivty  <br />
              </p>
            </div>
          </div>
        </div>
      </body>

   <footer>
        <div className=" container-fluid mt-2 bg-secondary">
         <div className="row ">

            <div className="col-4 align-items-center  buttonfooter ">
            <button type="button" class="btn btn-outline-dark mt-2 "> contact Us </button>
                 <p className='mt-1'> 
                     <br  />
                     <i class="fa-brands fa-whatsapp"></i> - +91 9360072547
                    <br />  
                    <i class="fa-regular fa-envelope"></i> - santhoshrajeshkannan2001@gmail.com
                    <br  />
                    <i class="fa-solid fa-location-dot"></i>  - kumbakonam 
                </p> 
               
                
               
             </div>

            <div className=" footimg col-3 mt-2">
               <h3  > <i class="fa-solid fa-location-crosshairs "></i>Location</h3>
           <a href="https://www.google.com/maps"><img src="src\assets\map.png" alt="" /></a> 
            </div>
            <div className="col-4 mt-2  pb-2 text-end">
             <h4>Terms and condition</h4>
                 <p>
                 <i class="fa-solid fa-handcuffs"></i>  policy
                   <br />
                   <i class="fa-solid fa-umbrella"></i> legel
                   <br />
                   <i class="fa-solid fa-gavel"></i>  condition
                 </p>
            </div>
         </div>
       </div>

    </footer>




    </div>
  )
}

export default Home