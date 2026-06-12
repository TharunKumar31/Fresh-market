import { faBagShopping, faMaskFace, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Contact() {
    return (
        <>
            <div className="contact" id="contact">
                <div className="container">
                    <div className="content-2">
                        <h1 className="contactus">Contact Us</h1>
                    </div>
                    <div className="content-2">
                        <p className="visit">
                            Visit us at [Fresh Market], where freshness meets quality!<br />
                            Call or WhatsApp us at [12345-67890] — we're happy to help!<br />
                            Email us at [freshmarket@gmail.com] or drop by our store today!
                        </p>
                    </div>
                    <div className="content-2" id="line"></div>
                    <div className="content-2">
                        <div className="row" id="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <h5>Contact</h5>
                                <p>Tel: 123-456-7890<br />Email: info@mysite.com</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <h5>Address</h5>
                                <p>500 Terry Francine Street<br />San Francisco, CA 94158</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <h5>Opening Hours</h5>
                                <p>Mon - Fri: 7am - 10pm<br />​Saturday: 8am - 10pm<br />Sunday: 8am - 11pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <form className="form">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <label>First name*</label>
                                    <input type="text" className="form-control" id="control" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <label>Last name*</label>
                                    <input type="text" className="form-control" id="control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <label>Email*</label>
                                    <input type="email" className="form-control" id="control" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <label>Subject</label>
                                    <input type="" className="form-control" id="control" />
                                </div>
                            </div>
                            <h2 className="message">Type your message here...</h2>
                            <textarea className="form-control" id="control"></textarea>
                            <div className="p-3 text-center">
                                <button className="btn" id="submit">Submit</button>
                            </div>
                        </form>
                        <div className="row" id="door">
                            <div className="col-lg-4 col-md-4 col-12">
                                <h1 className="text-center" id="fonticon"><FontAwesomeIcon icon={faBagShopping} /></h1>
                                <h1 className="text-center" id="pick">Pick UP Options</h1>
                                <p className="text-center" id="pickup">"Order fresh fruits & veggies online — pick up in-store at your convenience!"</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12" id="delivery">
                                <h1 className="text-center" id="fonticon"><FontAwesomeIcon icon={faTruck} /></h1>
                                <h1 className="text-center" id="day">Same Day Delivery</h1>
                                <p className="text-center" id="sameday">"Get farm-fresh fruits & veggies delivered to your door — same-day delivery available!"</p>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <h1 className="text-center" id="fonticon"><FontAwesomeIcon icon={faMaskFace} /></h1>
                                <h1 className="text-center" id="mask">Health & Safety</h1>
                                <p className="text-center" id="health">"We follow strict health & safety standards to keep your fruits, veggies, and you safe."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pb-5" id="wax">
                <div className="col"></div>
                <div className="col-10">
                    <footer className="footer">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <h5 className="store">Store</h5>
                                <p className="faq">Shop All<br />Shipping & Returns<br />Store Policy<br />FAQ</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <h5 className="store">Address</h5>
                                <p className="street">500 Terry Francine Street<br />San Francisco, CA 94158</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <h5 className="store">Opening Hours</h5>
                                <p className="mon">Mon - Fri: 7am - 10pm<br />Saturday: 8am - 10pm<br />Sunday: 8am - 11pm</p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <h5 className="store">Get It Fresh</h5>
                                <form className="subscribe">
                                    <label>Email*</label><br />
                                    <input type="email" className="form-control" id="email" /><br />
                                    <input type="checkbox" />  Yes,subscribe me to your newsletter.<br /><br />
                                    <input type="button" className="form-control btn btn-lg" id="now" value="Subscribe Now" />
                                </form>
                            </div>
                        </div>
                        <p className="copy">© 2035 by Fresh Market. Powered and secured by Wix</p>
                    </footer>
                </div>
                <div className="col"></div>
            </div>
        </>
    );
}




