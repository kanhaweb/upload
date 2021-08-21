import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Images/banner-image.png";

const insta = "https://www.instagram.com/k___a_n_h_a/";

const Home = () => {
    return (
        <>
        <section id="header">
            <div className="bod">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                            <h1>
                                Hey____________ <br></br> <strong className="kpp">I'm Kanha</strong>
                            </h1>
                            <h4 className="my-3">
                                "And I'm A Fresher Web Deweloper & Freelancer"
                            </h4>

                            <div className="mt-3">
                                <NavLink to="/services" className="btn btn-outline-primary king">-----|| Get Started ||-----</NavLink>
                            </div>

                            <div className="mt-3">
                                <NavLink to="/about" className="btn btn-outline-primary king">---|| About Us ||---</NavLink>
                            </div><br></br>
                            
                            <div className="social">
                                <a href={insta} className="icon1">
                                <i className="fa fa-instagram"></i>
                                </a>  <a href="" className="icon2">
                                <i className="fa fa-facebook"></i></a> <a href="" className="icon"><i className="fa fa-github"></i></a>
                            </div>
                            
                        </div>


                        <div className="col-md-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated im" alt="home img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Home;