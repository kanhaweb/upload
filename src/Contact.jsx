import React from 'react';

const Contact = () => {
    return (
        <>
        <div className="container border B">
            <h1 className="A">Contact Us</h1><br></br>

            <p className="text-center text-danger">Note:- Hello Friends This Contact Form is not Get your Data but if yor want to connect me so you can call me on below details</p><br></br>

            <div className="row">
                <div className="col-10 mx-auto">
                <form className="pt-4">
                        <div className="row">
                            <div className="col-md-6">
                                <label className="font-weight-bold">Name</label>
                                <input type="text" name="name" className="form-control font-weight-bold" placeholder="Enter Name.." />
                            </div>

                            <div className="col-md-6">
                                <label className="font-weight-bold">Email</label>
                                <input type="email" name="email" className="form-control font-weight-bold" placeholder="Enter Email.." />
                            </div>
                        </div><br></br>

                        <div className="row">
                            <div className="col-12">
                                <label className="font-weight-bold">Subject</label>
                                <input type="text" name="subject" placeholder="Enter Subject.." className="form-control font-weight-bold" />
                            </div>
                        </div><br></br>

                        <div className="row">
                            <div className="col-12">
                                <label className="font-weight-bold">Message</label>
                                <textarea className="form-control font-weight-bold" rows="3" cols="50" placeholder="Enter Your Message Here.."></textarea>
                            </div>
                        </div> <br></br>

                        <div className="text-center">
                            <input type="submit" value="Send Message" className="btn btn-primary" />
                        </div> <br></br>
                        <div className="text-center font-weight-bold border py-2">
                            <i className="fa fa-map-marker"></i> Vijay Nagar Scheme no. 78, Indore (M.P) <br></br>
                            <i className="fa fa-envelope"></i> kanhap569@gmail.com <br></br>
                            <i className="fa fa-phone"></i> +91 9111715245
                        </div><br></br>
                    </form>
                </div>
            </div>
        </div><br></br>
        </>
    );
};

export default Contact;

                