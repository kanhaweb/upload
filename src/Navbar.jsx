import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return (
        <>
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">

                    <nav className="navbar navbar-expand-lg navbar-light bg">
                        <NavLink className="navbar-brand" activeClassName='menu_active' to="#"><p className="kpp1">Kanha Patil</p></NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                    <NavLink activeClassName='menu_active' className="nav-link" to="/home"><p className="kp">Home</p></NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeClassName='menu_active' className="nav-link" to="/about"><p className="kp">About</p></NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeClassName='menu_active' className="nav-link" to="/services"><p className="kp">Services</p></NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink activeClassName='menu_active' className="nav-link" to="/contact"><p className="kp">Contact</p></NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
                
        </>
    );
};

export default Navbar;