import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai"
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi"
import { BsInfoCircle } from "react-icons/bs"

const Contact = () => {
    return (
        <>
            <Meta title={"Contact Us"} />
            <BreadCrumb title="Contact Us" />

            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2266215135733!2d106.57613127511766!3d10.79394755887016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752c81b22d5aa5%3A0xd4ffb8ba501731ab!2zNiDhuqRwIDIsIFbEqW5oIEzhu5ljIEIsIELDrG5oIENow6FuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1675432285951!5m2!1svi!2s"
                                width="600"
                                height="450"
                                className="border-0 w-100"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">

                            </iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-between">
                                <div>
                                    <h3 className="contact-title mb-4">
                                        Contact
                                    </h3>
                                    <div className="">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="contact-name contact-input">
                                                    <input className='form-control' type="text" name="text" placeholder="Your Name" id />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="contact-email contact-input">
                                                    <input className='form-control' type="text" name="text" placeholder="Your Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="contact-subject contact-input">
                                                    <input className='form-control' type="text" placeholder="Subject" text="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="contac-message">
                                                    <textarea className='form-control' type="text" placeholder="Message" text="text" defaultValue={""} />
                                                </div>
                                                <div>
                                                    <button className="button border-0 mt-2">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">
                                        Het in touch with us
                                    </h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='fs-5 d-flex  my-4  align-items-center gap-15'>
                                                <AiOutlineHome className='fs-5' />
                                                <address className=' mt-3'>Lutaco Tower, 173A Nguyen Van Troi, Phu Nhuan</address>
                                            </li>
                                            <li className='fs-5 d-flex my-4   align-items-center gap-15'>
                                                <BiPhoneCall className='fs-5' />
                                                <a className='' href="tel:+84 384420616">(+84) 384420616</a>
                                            </li>
                                            <li className='fs-5 d-flex  my-4 align-items-center gap-15'>
                                                <AiOutlineMail className='fs-5' />
                                                <a className='' href="mailto:khanhvo1981998@gmail.com">khanhvo1981998@gmail.com</a>
                                            </li>
                                            <li className='fs-5 d-flex my-4   align-items-center gap-15'>
                                                <BiInfoCircle className='fs-5' />
                                                <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Contact