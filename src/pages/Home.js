import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocalShipping } from 'react-icons/md'
import { AiOutlineGift } from 'react-icons/ai'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { CiDiscount1 } from 'react-icons/ci'
import { MdPayment } from 'react-icons/md'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpacialProduct from '../components/SpecialProduct'
import SpecialProduct from '../components/SpecialProduct'

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner py-3 position-relative">
                                <img className='img-fluid rounded-3' src="/images/main-banner-1.jpg" alt="main banner" />
                                <div className="main-banner-items position-absolute">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 or $41.62/mo.</p>
                                    <Link className='button' to='/'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex gap-15">
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <div className="small-banner py-3 position-relative">
                                    <img className='img-fluid rounded-3' src="/images/catbanner-01.jpg" alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>BEST SALE</h4>
                                        <h5>Laptops Max</h5>
                                        <p>From $1699.00 or <br /> $64.62/mo.</p>
                                        {/* <Link className='button' to='/'>BUY NOW</Link> */}
                                    </div>
                                </div>
                                <div className="small-banner py-3 position-relative">
                                    <img className='img-fluid rounded-3' src="/images/catbanner-02.jpg" alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>15% OFF</h4>
                                        <h5>Smartwatch 7</h5>
                                        <p>Shop the latest band <br /> styles and colors</p>
                                        {/* <Link className='button' to='/'>BUY NOW</Link> */}
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <div className="small-banner py-3 position-relative">
                                    <img className='img-fluid rounded-3' src="/images/catbanner-03.jpg" alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy IPAD Air</h5>
                                        <p>From $599.00 or <br /> $49.91/mo. for 12 mo.*</p>
                                        {/* <Link className='button' to='/'>BUY NOW</Link> */}
                                    </div>
                                </div>
                                <div className="small-banner py-3 position-relative">
                                    <img className='img-fluid rounded-3' src="/images/catbanner-04.jpg" alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>FREE ENGRAVING</h4>
                                        <h5>AirPods Max</h5>
                                        <p>High-fidelity playback & <br /> ultra-low distortion</p>
                                        {/* <Link className='button' to='/'>BUY NOW</Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-wrapper-2 py5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className='d-flex align-align-items-center gap-10'>
                                    <MdLocalShipping className='service_icon' />

                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p>From all orders over $100</p>
                                    </div>
                                </div>
                                <div className='d-flex align-align-items-center gap-10'>
                                    <AiOutlineGift className='service_icon' />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p>Save up to 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-align-items-center gap-10'>
                                    <TfiHeadphoneAlt className='service_icon' />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-align-items-center gap-10'>
                                    <CiDiscount1 className='service_icon' />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p>Get Factory direct price</p>
                                    </div>
                                </div>
                                <div className=' d-flex align-align-items-center gap-10'>
                                    <MdPayment className='service_icon' />
                                    <div>
                                        <h6>Secure Payment</h6>
                                        <p>100% Protected Payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between flex-wrap align-content-center">

                                <div className='d-flex gap align-items-center'>
                                    <div >
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div >
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div >
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div >
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/headphone.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div >
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div >
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div >
                                        <h6>Smart Tv</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div >
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="/images/headphone.jpg" alt="camera" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Featured Collection</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            <section className="famous-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="famous-card bg-dark position-relative">
                                <img className='img-fluid' src="/images/famous-1.webp" alt="" />
                                <div className="famous-content position-absolute">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch Series 7</h6>
                                    <p>From $399 or $16.62/mo. for 24 mo.*</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img className='img-fluid' src="/images/famous-2.webp" alt="" />
                                <div className="famous-content position-absolute">
                                    <h5 className='text-dark'>Studio Display</h5>
                                    <h6 className='text-dark'>600 nits of Brightness.</h6>
                                    <p className='text-dark'>27-inch 5K Retina display</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img className='img-fluid' src="/images/famous-3.webp" alt="" />
                                <div className="famous-content position-absolute">
                                    <h5 className='text-dark'>SMARTPHONES</h5>
                                    <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                                    <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <img className='img-fluid' src="/images/famous-4.webp" alt="" />
                                <div className="famous-content position-absolute">
                                    <h5 className='text-dark'>HOME SPEAKERS</h5>
                                    <h6 className='text-dark'>Room-filling sound.</h6>
                                    <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="special-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Special Products</h3>
                        </div>
                        <div className="row">
                            <SpecialProduct />
                            <SpecialProduct />
                            <SpecialProduct />
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

            <section className="marque-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marque-inner-wrapper">
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src="/images/brand-01.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="/images/brand-02.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="/images/brand-03.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="/images/brand-04.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="/images/brand-05.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="/images/brand-06.png" alt="brand" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="/images/brand-07.png" alt="brand" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className='section-heading'>Our Latest Blogs</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <BlogCard />

                        </div>
                        <div className="col-3">
                            <BlogCard />

                        </div>
                        <div className="col-3">
                            <BlogCard />

                        </div>
                        <div className="col-3">
                            <BlogCard />

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home