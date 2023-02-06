import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src="/images/newsletter.png" alt="" />
                                <h2 className='mb0 text-white'>Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div class="input-group">
                                <input
                                    type="text"
                                    class="form-control py-1"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2" />
                                <span class="input-group-text p-2"
                                    id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='mb-4 text-white'>Contact Us</h4>
                            <div>
                                <div className='footer-links d-flex flex-column'>

                                    <address className="text-white fs-6">
                                        Lutaco Tower, 173A Nguyen Van Troi, Phu Nhuan
                                    </address>
                                    <a className='text-white py-2 mb-1' href='tel:+84 0384420616'>+84 384 442 0616</a>
                                    <a className='text-white py-2 mb-1' href='mailto:khanhvo1981998@gmail.com'>khanhvo1981998@gmail.com</a>
                                    <div className="social_icons d-flex align-items-center gap-15">
                                        <a className='text-white ' href="#">
                                            <BsGithub className='fs-4' />
                                        </a>
                                        <a className='text-white ' href="#">
                                            <BsFacebook />
                                        </a>
                                        <a className='text-white ' href="#">
                                            <BsPinterest className='fs-4' />
                                        </a>
                                        <a className='text-white ' href="#">
                                            <BsInstagram className='fs-4' />
                                        </a>
                                        <a className='text-white ' href="#">
                                            <BsYoutube className='fs-4' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='mb-4 text-white'>Information</h4>
                            <div>
                                <div className='footer-links d-flex flex-column'>
                                    <Link className='text-white py-2 mb-1' to='/'>Privacy Policy</Link>
                                    <Link className='text-white py-2 mb-1' to='/'>Refund Policy</Link>
                                    <Link className='text-white py-2 mb-1' to='/'>Shipping Policy</Link>
                                    <Link className='text-white py-2 mb-1' to='/'>Terms Of Service</Link>
                                    <Link className='text-white py-2 mb-1' to='/'>Blogs</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='mb-4 text-white'>Account</h4>
                            <div>
                                <div className='footer-links d-flex flex-column'>
                                    <Link className='text-white py-2 mb-1' to='/'>About Us</Link>
                                    <Link className='text-white py-2 mb-1' to='/'>Fag</Link>
                                    <Link className='text-white py-2 mb-1' to='/'>Contact</Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='mb-4 text-white'>Qick Links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1' to='/'>HeadPhones</Link>
                                <Link className='text-white py-2 mb-1' to='/'>Laptops</Link>
                                <Link className='text-white py-2 mb-1' to='/'>Tablets</Link>
                                <Link className='text-white py-2 mb-1' to='/'>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center text-white mb-0">copyright by Devo &copy; {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer