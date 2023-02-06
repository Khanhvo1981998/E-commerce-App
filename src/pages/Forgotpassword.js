import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Forgotpassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />
            <div className="login-wrapper py5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className=' text-center mb-3'>
                                Reset Your Password
                            </h3>
                            <p className="text-center mt-2 mb-3">
                                We will send you an email to reset your password
                            </p>
                            <form >
                                <div className="input-container">

                                    <input className='form-control' type="email" name="email" placeholder='Enter your email' required />

                                </div>

                                <div className="button-container d-flex justify-content-between">
                                    <input className='button' type="submit" />
                                    <Link className=' mt-3' to="/login">Back</Link>

                                </div>
                            </form >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgotpassword