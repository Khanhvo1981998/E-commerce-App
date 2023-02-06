import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'



const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0 fs-3'>E-Commerce</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-white mb-0'>
                                Hotline: <a className='text-white' href="tel: +84 384420616">0384420616</a></p>
                        </div>
                    </div>
                </div>
            </header>


            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className='text-white' to='/'>Devo</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div class="input-group">
                                <input
                                    type="text"
                                    class="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2" />
                                <span class="input-group-text p-3"
                                    id="basic-addon2">
                                    <BsSearch className='fs-6' />
                                </span>
                            </div>

                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to='/compare-product'>
                                        <img src="/images/compare.svg" alt="compare" />
                                        <p className='mb-0'>Compare <br /> Product</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to='/wishlist'>
                                        <img src="/images/wishlist.svg" alt="wishlist" />
                                        <p className='mb-0'>Favourite <br /> wishlist</p>
                                    </Link>
                                </div>

                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to='/login'>
                                        <img src="/images/user.svg" alt="user" />
                                        <p className='mb-0'>Log in <br /> My Account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white' to=''>
                                        <img src="/images/cart.svg" alt="cart" />
                                        <div className="d-flex flex-column">
                                            <span className="badge bg-white text-dark">
                                                0
                                            </span>
                                            <p className=''>$ 500</p>
                                        </div>
                                    </Link>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div className='pe-4'>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="/images/menu.svg" alt="" />
                                            <span className='me-5 d-inline-block'> Shop Catagories</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link to='/' className="dropdown-item text-white " >Action</Link></li>
                                            <li><Link to='/' className="dropdown-item text-white" >Another action</Link></li>
                                            <li><Link to='/' className="dropdown-item text-white" >Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">


                                        <NavLink to=''>Home</NavLink>
                                        <NavLink to='/store'>Our Store</NavLink>
                                        <NavLink to='/blogs'>Blogs</NavLink>
                                        <NavLink to='/contact'>Contact</NavLink>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </header >
        </>
    )
}

export default Header