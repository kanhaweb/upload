import React from 'react';
import web1 from "../src/Images/about-us.png"
import { NavLink } from 'react-router-dom';


const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card border">
                    <img src={props.imgsrc} className="card-img-top" alt="ig" />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">{props.text}</p>
                            <NavLink to="/contact" class="btn btn-primary">Get-Now</NavLink>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Card;