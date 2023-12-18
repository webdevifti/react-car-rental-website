import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/blog-list.css'
import BlogData from '../../assets/data/blogData'
const BlogList = () => {
  return <>
    {
        BlogData.map((item) => (
            <BlogItem item={item} key={item.id} />
        ))
    }
  </>
}

const BlogItem = ({ item }) => {
    const {imgUrl,title,slug,author,date,description,time} = item

    return <Col lg="4" md="4" sm="6" className='blog__item__boxs'>
        <div className="blog__item">
            <img src={imgUrl} alt="" className='w-100' />
            <div className="blog__info">
                <Link to={`/blogs/${slug}`} className="blog__title">{title}</Link>
                <p className="section__description">
                    {
                        description.length > 100 ? description.substr(0,100) : description
                    }
                </p>
                <Link to={`/blogs/${slug}`} className="read__more-btn">Read More</Link>

                <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
                    <span className="blog__author">
                        <i className='ri-user-line'></i> {author}
                    </span>

                    <div className="d-flex align-items-center gap-3">
                        <span className="d-flex align-items-center gap-1 section__description">
                            <i className='ri-calender-line'></i> {date}
                        </span>
                        <span className="d-flex align-items-center gap-1 section__description">
                            <i className='ri-time-line'></i> {time}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </Col>
}
export default BlogList