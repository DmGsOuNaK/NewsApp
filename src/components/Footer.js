import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="contact-content text-center">
                                <a href="/">
                                    <img style={{ maxWidth: "10%", height: "auto" }} src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" alt="logo" />
                                </a>
                                <p>Stay informed, stay empowered. Explore the world with our news app. </p>
                                <div className="hr"></div>
                                <h6>Vellore Institute of Technology,Vellore, Tamil Nadu - 632014</h6>
                                <h6>+91 7384 4470 50<span>|</span>+91 9593 8824 60</h6>
                                <button type="button" className="btn btn-outline-warning">
                                    <a href="mailto:sounak.mandal2020@vitstudent.ac.in">Write an Email to Us</a>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <p>
                    Copyright &copy; {currentYear}{" "}
                    <img style={{ maxWidth: "1%", height: "auto" }} src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" alt="logo" /> All Rights Reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
