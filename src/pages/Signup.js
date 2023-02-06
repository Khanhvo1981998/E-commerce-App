import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const Signup = () => {
    return (
        <>
            <Meta title={"Register"} />
            <BreadCrumb title="Register" />


            <div className=" home-wrapper-2 py-1 ">
                <div className=" auth-card">
                    <div className="input-container">
                        <form >
                            <div className="input-container">
                                <label>First name </label>
                                <input className='form-control' type="text" name="first-name" required />

                            </div>
                            <div className="input-container">
                                <label>Last name </label>
                                <input className='form-control' type="password" name="last-name" required />

                            </div>
                            <div className="input-container">
                                <label>Email </label>
                                <input className='form-control' type="email" name="email" required />

                            </div>
                            <div className="input-container">
                                <label>Password </label>
                                <input className='form-control' type="password" name="pass" required />

                            </div>
                            <div className="button-container d-flex justify-content-center">

                                <Link className=' button forgotpassword mt-4' to="">Register</Link>
                            </div>
                        </form >
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup