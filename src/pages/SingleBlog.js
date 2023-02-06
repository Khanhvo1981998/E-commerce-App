import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { HiArrowLongLeft } from "react-icons/hi2"

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className="container-xxl ">
                    <div className="row d-flex ">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Find By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Home</li>
                                        <li>Our Store</li>
                                        <li>Blogs</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="single-blog-card">
                                <Link to="/blogs" className=' d-flex align-items-center gap-10'>
                                    <HiArrowLongLeft />
                                    Go back to Blogs</Link>

                                <h3 className="title">
                                    Lorem ipsum dolor sit amet consectetur.
                                </h3>
                                <img src="/images/blog-1.jpg" alt="" />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Ipsam explicabo quisquam omnis, non natus accusamus magni ratione pariatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog