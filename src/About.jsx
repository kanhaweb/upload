import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Images/about-us.png";


const About = () => {
    return (
        <>
        <section id="header">
            <div className="bod">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 order-2 order-lg-1 header-img">
                            <img src={web} className="img-fluid animated" alt="home img" />
                        </div>


                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                            <h2 className="patil">
                                L E T - M E<br></br>
                                I N T R O D U C E<br></br>
                                M Y - S E L F
                            </h2>
                            <h4 className="my-3 patil">
                            Hey, I AM Kanha Patil <br></br>
                            <i className="font"> I'm From Indore (M.P) And I'm Pursuing a graduation in Dual Degree Master of Computer Application <br></br><br></br>From :-  --| Acropolis Institute of Technology and Research Indore |--</i>

                            </h4>

                            <div className="mt-3 patil">
                                <NavLink to="/services" className="btn btn-outline-primary king">-----|| Our Services ||-----</NavLink>
                            </div>

                           <br></br>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default About;



