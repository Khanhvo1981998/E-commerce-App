import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'


const SingleProduct = () => {

    const [OrderedProduct, setOderedProduct] = useState(true)
    const props = { width: 400, height: 500, zoomWidth: 400, img: "https://images.unsplash.com/photo-1610897534349-7759782118b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" };


    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className=' main-product-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-image d-flex justify-content-between flex-wrap ">
                                <div>
                                    <img className=' img-fluid w-100' src="https://images.unsplash.com/photo-1610897534349-7759782118b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="" />
                                </div>
                                <div>
                                    <img className=' img-fluid w-100' src="https://images.unsplash.com/photo-1610897534349-7759782118b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="" />
                                </div>
                                <div>
                                    <img className=' img-fluid w-100' src="https://images.unsplash.com/photo-1610897534349-7759782118b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="" />
                                </div>
                                <div>
                                    <img className=' img-fluid w-100' src="https://images.unsplash.com/photo-1610897534349-7759782118b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <h5> Lorem ipsum dolor sit amet consectetur adipisicing.</h5>
                                <h6>$100.00</h6>
                                <div className=" mb-2">
                                    <ReactStars
                                        count={5}
                                        // onChange={ratingChanged}
                                        size={24}
                                        edit={false}
                                        activeColor="#ffd700"
                                        value={4}
                                    />
                                    <span className=''>(2 reviews)</span>

                                </div>
                                <p>Write a review</p>
                                <h6>Type:
                                    <span>Watch</span>
                                </h6>
                                <h6>Brand:
                                    <span>Rolex</span>
                                </h6>
                                <h6>Catagories:
                                    <span>airpods, camera's, Computer & Laptop, headphones, our store</span>
                                </h6>
                                <h6>Tags:
                                    <span>Watchs, laptop, headphones</span>
                                </h6>
                                <h6>SKU:
                                    <span>SKU027</span>
                                </h6>
                                <h6>Availability:
                                    <span>504 in Stock</span>
                                </h6>
                                <h6>Size:
                                    <input className=' input-size' type="button" value="S" />
                                    <input className=' input-size' type="button" value="L" />
                                </h6>
                                <h6>Colors:
                                    <div className="mt-3">
                                        <Color />
                                    </div>

                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="descriptiom-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Desciption</h4>
                            <div className="bg-white p-3">

                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad iure at vero explicabo veritatis quibusdam recusandae iste, blanditiis beatae fugiat sequi voluptates rerum, consectetur eaque repellendus cupiditate, a nulla eum eveniet. Necessitatibus!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Reviews</h4>
                            <div className="review-inner-wrapper">
                                <div className=" review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className="d-flex gap-10 align-items-center">
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                                value={4}

                                            />
                                            <p className='mb-0'> Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {OrderedProduct && (
                                        <div>
                                            <a href="" className="text-dark text-decoration-underline"> Write a Review</a>
                                        </div>
                                    )}
                                </div>

                                <div className="review-form mt-3">
                                    <div className="">
                                        <div className="row">

                                            <div className="col-lg-3  mb-3">
                                                Rating
                                                <ReactStars
                                                    count={5}
                                                    // onChange={ratingChanged}
                                                    size={24}
                                                    edit={true}
                                                    activeColor="#ffd700"
                                                    value={4}

                                                />
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-lg-12">
                                                <div className="contact-message">
                                                    <textarea className='form-control' type="text" placeholder="Write your comment here (Body of Review 1500)" text="text" defaultValue={""} />
                                                </div>
                                                <div className=' d-flex justify-content-end'>
                                                    <button className=" button border-0 mt-2">Send Review</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="reviews">
                                    <div className="review">
                                        <div className=' d-flex gap-10 align-items-center mt-3'>
                                            <h6 className="mb-0">VDK</h6>
                                            <ReactStars
                                                count={5}
                                                // onChange={ratingChanged}
                                                size={24}
                                                edit={false}
                                                activeColor="#ffd700"
                                                value={5}

                                            />
                                        </div>
                                        <p className="mt-3">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, exercitationem beatae et officiis quod saepe quasi non dignissimos inventore laboriosam at nemo, quia unde tempore aspernatur.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Out Popular Products</h3>
                        </div>
                        <div className="row">

                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct