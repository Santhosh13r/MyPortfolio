import React from 'react'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
      <body>
        <div className="container-fluid">

          <nav class="navbar navbar-expand-lg bg-sucess">
            <div class="container-fluid">
             <Link className='navbar-brand' to={'/'}><i class="fa-solid fa-arrow-left p-2"></i>Home</Link>

            </div>
          </nav>
        </div>

        <div className='hr'></div>


        <div className=" about container-fluid mt-2 ">
          <div className="row">
                
            <div className="col-6 mt-3 p-5">
              <p> <strong className='text-decoration-underline'>About Us </strong><br />Here’s an "About Us" section draft for your portfolio, Santhosh:

                ---

                ### About Me
                Hello! I’m Santhosh, a passionate and driven software professional with a Master’s degree in Computer Applications. Hailing from the culturally rich city of Lucknow, I bring a blend of traditional values and modern tech-savviness to my work.

                I specialize in <strong>Front end Developer</strong>  , combining creativity with technical expertise to build dynamic and user-centric applications. My academic journey and hands-on experiences, including an internship at Mercello Tech, have equipped me with a solid foundation in software development, problem-solving, and collaboration.

                Beyond coding, I am enthusiastic about learning new technologies, solving complex challenges, and contributing to impactful projects. I believe in continuous growth and strive to bridge the gap between theoretical knowledge and practical application.

                Let’s connect and build something amazing together!

                ---

                Feel free to customize it further based on your style or achievements! <i class="fa-solid fa-cloud-moon"></i></p>

            </div>
           <div className="col-6">
            <img  className = 'img-fluid mb-2 mt-3' src="src\assets\about.png" alt="" />
           </div>
          </div>

        </div>

      </body>




    </>
  )
}

export default About