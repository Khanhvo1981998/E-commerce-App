import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (

        <div className="blog-card">
            <div className="card-image">
                <img className='img-fluid w-100 ' src="/images/blog-1.jpg" alt="" />
            </div>
            <div className="blog-content">
                <p className='date'>1 Feb, 2023</p>
                <h5 className="title"> A beautiful sunday morning renaissance</h5>
                <p className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel neque dolorum possimus vero, laudantium minus?
                </p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>
        </div>

    )
}

export default BlogCard