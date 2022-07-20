import React,{ useEffect } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import BlogList from '../components/UI/BlogList'
import { useParams } from 'react-router-dom'
import blogData from '../assets/data/blogData'


const BlogDetails = () => {
  const {slug} = useParams()
  const blog = blogData.find(item => item.slug == slug)
  useEffect(() => {
    window.scrollTo(0,0);
  },[blog])


  return (
    <Helmet title={blog.title} >
      <CommonSection title={blog.title} />
      <section>
      <Container>
        <Row>
          <Col lg="8" md="8">
            <div className="blog__details">
              <img src={blog.imgUrl} className="w-100" alt="" />
              <h2 className="section__title mt-4">{blog.title}</h2>

              <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                <span className="blog__author">
                    <i className='ri-user-line'></i> {blog.author}
                </span>
                <span className="d-flex align-items-center gap-1 section__description">
                    <i className='ri-calender-line'></i> {blog.date}
                </span>
                <span className="d-flex align-items-center gap-1 section__description">
                    <i className='ri-time-line'></i> {blog.time}
                </span>
              </div>

              <p className="section__description">{blog.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </Helmet>
  )
}

export default BlogDetails