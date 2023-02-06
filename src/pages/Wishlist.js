import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Wishlist = () => {
    return (
        <>
            <Meta title={"WishList"} />
            <BreadCrumb title="WishList" />

            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img className=' img-fluid position-absolute cross' src="/images/cross.svg" alt="" />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" className='w-100' alt="" />
                                </div>
                            </div>
                            <div className="wishlist-content">
                                <h5 className="title mt-2">
                                    Lorem ipsum dolor sit amet consectetur.
                                </h5>
                                <span className="price ">$500.00</span> &nbsp; <strike>$750.00</strike>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img className=' img-fluid position-absolute cross' src="/images/cross.svg" alt="" />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" className='w-100' alt="" />
                                </div>
                            </div>
                            <div className="wishlist-content">
                                <h5 className="title mt-2">
                                    Lorem ipsum dolor sit amet consectetur.
                                </h5>
                                <span className="price ">$100.00</span> &nbsp; <strike>$750.00</strike>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img className=' img-fluid position-absolute cross' src="/images/cross.svg" alt="" />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" className='w-100' alt="" />
                                </div>
                            </div>
                            <div className="wishlist-content">
                                <h5 className="title mt-2">
                                    Lorem ipsum dolor sit amet consectetur.
                                </h5>
                                <span className="price ">$500.00</span> &nbsp; <strike>$750.00</strike>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img className=' img-fluid position-absolute cross' src="/images/cross.svg" alt="" />
                                <div className="wishlist-card-image">
                                    <img src="/images/watch.jpg" className='w-100' alt="" />
                                </div>
                            </div>
                            <div className="wishlist-content">
                                <h5 className="title mt-2">
                                    Lorem ipsum dolor sit amet consectetur.
                                </h5>
                                <span className="price ">$500.00</span> &nbsp; <strike>$750.00</strike>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist