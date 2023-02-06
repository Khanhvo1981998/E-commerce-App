import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


const Login = () => {
    const history = useNavigate()

    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "khanhdev",
            password: "khanhdev"
        },
        {
            username: "khanhdev1",
            password: "khanhdev1"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        let { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                history("/")
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input className='form-control' type="text" name="uname" required />
                    <div className=' text-danger '>
                        {renderErrorMessage("uname")}
                    </div>
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input className='form-control' type="password" name="pass" required />
                    <div className=' text-danger'>
                        {renderErrorMessage("pass")}
                    </div>
                </div>
                <Link className=' forgotpassword mt-2' to="/forgot-password">Forgot Password</Link>
                <div className="button-container d-flex justify-content-between">
                    <input className='button' type="submit" />
                    <a href="/register" className="button  h-50 mt-3">SignUp</a>

                </div>
            </form >
        </div >
    );

    return (
        <>
            <Meta title={"Login Page"} />
            <BreadCrumb title="Login Page" />
            <div className=" home-wrapper-2 py-5 ">
                <div className=" auth-card">
                    <div className="input-container">
                        <div className="title d-flex justify-content-center">Sign In</div>
                        {isSubmitted ? <div>  </div> : renderForm}
                    </div>

                </div>
            </div>
        </>

    )
}

export default Login