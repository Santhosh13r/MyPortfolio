import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container mt-5 mb-5">
                    <div className="row justify-content-between ">
                        <div className="col-4 m-0 ft-1 ">
                            <h3 className='btn-btn-primary  mb-2'>Contact Us</h3>
                                <hr />
                            <ul className='list ' >
                                <li><i class="fa-brands fa-whatsapp  "></i>  +91 9360072547</li>
                                <li><i class="fa-regular fa-envelope "></i> santhoshrajeshkannan2001@gmail </li>
                                <li><i class="fa-solid fa-location-dot "></i> kumbakonam </li>
                            </ul>

                        </div>
                        <div className="col-3  align-center ft-2">
                            <h3>Location</h3>
                            <hr />
                            <a href="https://g.co/kgs/2bbyfnu"><img src="src\assets\map.png" alt="" /></a>
                        </div>
                        <div className="col-3 mt-3 ft-3  ">
                            <h3>Social Media</h3>
                            <hr />
                            <i class="fa-brands fa-whatsapp gap-2"></i>
                            <i class="fa-regular fa-envelope gap-2"></i>
                            <i class="fa-solid fa-location-dot gap-2"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                        
                    </div>
                    <div className=" border border-dark mt-5">
                    </div>
                    <div className="text-center pt-3">
                        <h5> &copy; {new Date().getFullYear()} Santhosh All Copy Rights</h5>
                    </div>
                </div>



            </footer>






        </>
    )
}

export default Footer