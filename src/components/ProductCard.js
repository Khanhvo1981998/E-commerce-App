import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    const { grid } = props
    let location = useLocation()

    return (
        < >
            <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
                <Link to=':id' className="product-card position-relative">

                    <div className="wishlist-icon position-absolute">
                        <Link to='/'>
                            <img src="/images/wish.svg" alt="wish" />
                        </Link>
                    </div>

                    <div className="product-image">
                        <img className='img-fluid' src="/images/watch.jpg" alt="" />
                        <img className='img-fluid' src="/images/watch-1.avif" alt="" />
                    </div>

                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                            value={4}

                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt delectus ratione animi! Alias!
                        </p>
                        <p className='price'>$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <Link to=''>
                                <img src="/images/view.svg" alt="view" />
                            </Link>
                            <Link to=''>
                                <img src="/images/prodcompare.svg" alt="prodcompare" />
                            </Link>
                            <Link to=''>
                                <img src="/images/add-cart.svg" alt="addcard" />
                            </Link>

                        </div>
                    </div>
                </Link>

            </div>
            <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
                <Link to='/' className="product-card position-relative">

                    <div className="wishlist-icon position-absolute">
                        <Link to='/'>
                            <img src="/images/wish.svg" alt="wish" />
                        </Link>
                    </div>

                    <div className="product-image">
                        <img className='img-fluid' src="/images/watch.jpg" alt="" />
                        <img className='img-fluid' src="/images/watch-1.avif" alt="" />
                    </div>

                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                            value={4}

                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt delectus ratione animi! Alias!
                        </p>
                        <p className='price'>$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <Link to=''>
                                <img src="/images/view.svg" alt="view" />
                            </Link>
                            <Link to=''>
                                <img src="/images/prodcompare.svg" alt="prodcompare" />
                            </Link>
                            <Link to=''>
                                <img src="/images/add-cart.svg" alt="addcard" />
                            </Link>

                        </div>
                    </div>
                </Link>

            </div>
            <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
                <Link to='/' className="product-card position-relative">

                    <div className="wishlist-icon position-absolute">
                        <Link to='/'>
                            <img src="/images/wish.svg" alt="wish" />
                        </Link>
                    </div>

                    <div className="product-image">
                        <img className='img-fluid' src="/images/watch.jpg" alt="" />
                        <img className='img-fluid' src="/images/watch-1.avif" alt="" />
                    </div>

                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                            value={4}

                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt delectus ratione animi! Alias!
                        </p>
                        <p className='price'>$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <Link to=''>
                                <img src="/images/view.svg" alt="view" />
                            </Link>
                            <Link to=''>
                                <img src="/images/prodcompare.svg" alt="prodcompare" />
                            </Link>
                            <Link to=''>
                                <img src="/images/add-cart.svg" alt="addcard" />
                            </Link>

                        </div>
                    </div>
                </Link>

            </div>
            <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}>
                <Link to='/' className="product-card position-relative">

                    <div className="wishlist-icon position-absolute">
                        <Link to='/'>
                            <img src="/images/wish.svg" alt="wish" />
                        </Link>
                    </div>

                    <div className="product-image">
                        <img className='img-fluid' src="/images/watch.jpg" alt="" />
                        <img className='img-fluid' src="/images/watch-1.avif" alt="" />
                    </div>

                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                            value={4}

                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nesciunt delectus ratione animi! Alias!
                        </p>
                        <p className='price'>$100.00</p>
                    </div>

                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <Link to=''>
                                <img src="/images/view.svg" alt="view" />
                            </Link>
                            <Link to=''>
                                <img src="/images/prodcompare.svg" alt="prodcompare" />
                            </Link>
                            <Link to=''>
                                <img src="/images/add-cart.svg" alt="addcard" />
                            </Link>

                        </div>
                    </div>
                </Link>

            </div>

        </>

    )
}

export default ProductCard