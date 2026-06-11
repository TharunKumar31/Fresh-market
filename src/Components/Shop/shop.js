import React from "react";

export function Shop() {
    return (
        <>
            <div className="shop" id="shop">
                <div className="mainshop">
                    <div className="container">
                        <div className="content">
                            <h1 className="deal">Weekly Deals</h1>
                            <br />  <p className="deals">"Don't miss this week's hottest deals-limited-time discounts on top products!"</p>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-card position-relative">
                                        <img src="https://media.istockphoto.com/id/177012688/photo/eggs-clipping-path.jpg?s=612x612&w=0&k=20&c=6efzckLd2rwFb1vRx257sub2zh8dUu5EaL7G0tM9nQ0=" className="img-fluid product-image" id="image" />
                                        <h5 className="text-center my-3">Egg</h5>
                                        <p className="text-center"><del>$9.99</del>$8.99</p>
                                        <form className="text-center">
                                            <input type="number" className="text-center" />
                                            <br /><button className="btn btn-sm rounded-pill" id="cart">Add cart</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-card position-relative">
                                        <img src="https://exat8rt6fi5.exactdn.com/wp-content/uploads/2022/05/carrot-01.jpg?strip=all&lossy=1&ssl=1" className="img-fluid product-image" id="image" />
                                        <h5 className="text-center my-3">Carrot</h5>
                                        <p className="text-center"><del>$5.99</del>$4.99</p>
                                        <form className="text-center">
                                            <input type="number" className="text-center" />
                                            <br /><button className="btn btn-sm rounded-pill" id="cart">Add cart</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-card position-relative">
                                        <img src="https://urjaseeds.com/cdn/shop/products/cucumber-seeds-malaysia-t103m_900x.jpg?v=1591175147" className="img-fluid product-image" id="image" />
                                        <h5 className="text-center my-3">Cucumber</h5>
                                        <p className="text-center"><del>$8.99</del>$7.99</p>
                                        <form className="text-center">
                                            <input type="number" className="text-center" />
                                            <br /><button className="btn btn-sm rounded-pill" id="cart">Add cart</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-card position-relative">
                                        <img src="https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg" className="img-fluid product-image" id="image" />
                                        <h5 className="text-center my-3">Banana</h5>
                                        <p className="text-center"><del>$10.99</del>$9.99</p>
                                        <form className="text-center">
                                            <input type="number" className="text-center" />
                                            <br /><button className="btn btn-sm rounded-pill" id="cart">Add cart</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-card position-relative">
                                        <img src="https://iranfreshfruit.net/wp-content/uploads/2020/01/red-apple-fruit.jpg" className="img-fluid product-image" id="image" />
                                        <h5 className="text-center my-3">Apple</h5>
                                        <p className="text-center"><del>$9.99</del>$8.99</p>
                                        <form className="text-center">
                                            <input type="number" className="text-center" />
                                            <br /><button className="btn btn-sm rounded-pill" id="cart">Add cart</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-card position-relative">
                                        <img src="https://fairo.pk/wp-content/uploads/2019/04/Untitled-design-2025-02-26T094743.952.png" className="img-fluid product-image" id="image" />
                                        <h5 className="text-center my-3">Milk</h5>
                                        <p className="text-center"><del>$5.99</del>$4.99</p>
                                        <form className="text-center">
                                            <input type="number" className="text-center" />
                                            <br /><button className="btn btn-sm rounded-pill" id="cart">Add cart</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-card position-relative">
                                        <img src="https://www.harighotra.co.uk/images/Shutterstock/tomaotoes1_560x560.jpg" className="img-fluid product-image" id="image" />
                                        <h5 className="text-center my-3">Tomato</h5>
                                        <p className="text-center"><del>$8.99</del>$7.99</p>
                                        <form className="text-center">
                                            <input type="number" className="text-center" />
                                            <br /><button className="btn btn-sm rounded-pill" id="cart">Add cart</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-12">
                                    <div className="product-card position-relative">
                                        <img src="https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg" className="img-fluid product-image" id="image" />
                                        <h5 className="text-center my-3">Coriander leaves</h5>
                                        <p className="text-center"><del>$10.99</del>$9.99</p>
                                        <form className="text-center">
                                            <input type="number" className="text-center" />
                                            <br /><button className="btn btn-sm rounded-pill" id="cart">Add cart</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}