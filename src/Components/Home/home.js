import { faBasketShopping, faCartShopping, faCircleUser, faEnvelope, faSearch, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Home() {
    return (
        <>

            <div id="navbar">
                <nav class="navbar navbar-expand-lg p-4">
                    <div class="container">
                        <a class="navbar-brand" href="#" id="market"><FontAwesomeIcon icon={faBasketShopping} className="me-2" />Fresh Market</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-4 ">
                                <li class="nav-item ms-3">
                                    <a class="nav-link" href="#home">Home</a>
                                </li>
                                <li class="nav-item ms-3">
                                    <a class="nav-link" href="#shop">Shop</a>
                                </li>
                                <li class="nav-item ms-3">
                                    <a class="nav-link" href="#about">About</a>
                                </li><li class="nav-item ms-3">
                                    <a class="nav-link" href="#contact">Contact</a>
                                </li>
                                <form class="search">
                                    <p><button class="btn" type="submit"><FontAwesomeIcon icon={faSearch} size="xl" /></button>
                                        <button class="btn ms-1" type="submit"><FontAwesomeIcon icon={faCircleUser} size="2xl" />  Login</button>
                                        <button class="btn ms-1" type="submit"><FontAwesomeIcon icon={faCartShopping} size="xl" /></button>
                                    </p>
                                </form>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>


            {/* home */}

            <div className="home" id="home">
                <div class="card">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <img src="https://static.wixstatic.com/media/ad420a_f2ae964f4e3d4bb8af8b6cdda0ad86bd~mv2.jpg/v1/fill/w_2224,h_1202,q_90,enc_avif,quality_auto/ad420a_f2ae964f4e3d4bb8af8b6cdda0ad86bd~mv2.jpg" class="homeimg" alt="..." />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src="https://i.pinimg.com/736x/33/28/af/3328af5718cce4f16135b6d02b322330.jpg" class="homeimg" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://i.pinimg.com/736x/ec/6d/12/ec6d124f310cb126b6447b18198bd791.jpg" class="homeimg" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-img-overlay">
                        <p class="card-text1">FRESH MARKET</p>
                        <p class="card-text">WE'LL DELIVER<br />EVERYTHING<br />YOU NEED<br /><button class="btn btn-sm rounded-pill" id="online">SHOP ONLINE</button> </p>

                    </div>
                </div>
            </div>
        </>
    );
}
