import { faBasketShopping, faCartShopping, faCircleUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Home() {
    return (
        <>

            <div id="navbar">
                <nav className="navbar navbar-expand-lg p-4">
                    <div className="container">
                        <a className="navbar-brand" href="#home" id="market"><FontAwesomeIcon icon={faBasketShopping} className="me-2" />Fresh Market</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-4 ">
                                <li className="nav-item ms-3">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a className="nav-link" href="#shop">Shop</a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a className="nav-link" href="#about">About</a>
                                </li><li className="nav-item ms-3">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                                <form className="search">
                                    <p><button className="btn" type="submit"><FontAwesomeIcon icon={faSearch} size="xl" /></button>
                                        <button className="btn ms-1" type="submit"><FontAwesomeIcon icon={faCircleUser} size="2xl" />  Login</button>
                                        <button className="btn ms-1" type="submit"><FontAwesomeIcon icon={faCartShopping} size="xl" /></button>
                                    </p>
                                </form>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>


            {/* home */}

            <div className="home" id="home">
                <div className="card">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://static.wixstatic.com/media/ad420a_f2ae964f4e3d4bb8af8b6cdda0ad86bd~mv2.jpg/v1/fill/w_2224,h_1202,q_90,enc_avif,quality_auto/ad420a_f2ae964f4e3d4bb8af8b6cdda0ad86bd~mv2.jpg" className="homeimg" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://i.pinimg.com/736x/33/28/af/3328af5718cce4f16135b6d02b322330.jpg" className="homeimg" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.pinimg.com/736x/ec/6d/12/ec6d124f310cb126b6447b18198bd791.jpg" className="homeimg" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="card-img-overlay">
                        <p className="card-text1">FRESH MARKET</p>
                        <p className="card-text">WE'LL DELIVER<br />EVERYTHING<br />YOU NEED<br /><button className="btn btn-sm rounded-pill" id="online">SHOP ONLINE</button> </p>

                    </div>
                </div>
            </div>
        </>
    );
}
