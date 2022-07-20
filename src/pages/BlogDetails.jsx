import React,{ useEffect } from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/helmet/Helmet'
import { Container,Row,Col, Form,FormGroup,Input } from 'reactstrap'
import BlogList from '../components/UI/BlogList'
import { Link, useParams } from 'react-router-dom'
import blogData from '../assets/data/blogData'
import commentimg  from '../assets/all-images/ava-1.jpg'
import '../styles/blog-details.css'
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

            <div className="comment__list mt-5">
              <h4 className='mb-5'>3 Comments</h4>
              <div className='single__comment d-flex gap-3'>
                <img src={commentimg} alt="" />
              <div className="comment__content">
                <h6 className='fw-bold'>David</h6>
                <p className="section__description mb-0">20 July, 2022</p>
                <p className="section__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem non ut ad reprehenderit aperiam, quam consequuntur quae repudiandae atque voluptatibus?</p>
                <span className='replay d-flex align-items-center gap-1'>
                <i className='ri-reply-line'></i> Reply
              </span>
              </div>
              </div>
            
             <div className="leave__comment-form mt-5">
              <h4>Leave a Comment</h4>
              <p className="section__description">You must sign in to make or comment a post</p>

              <Form>
                <FormGroup className='d-flex gap-3'>
                  <Input type="text" placeholder='Full name' />
                  <Input type="email" placeholder='Email' />
                </FormGroup>
                <FormGroup>
                  <textarea  cols="30" className='w-100 py-2 px-3' placeholder='comment....'></textarea>
                </FormGroup>
                <button type='submit' className='btn comment__btn mt-3'>Post a Comment</button>
              </Form>
             </div>
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="recent__post mb-4">
              <h2 className="fw-bold">Recent Post</h2>
            </div>
            {
              blogData.slice(0,5).map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} className="w-25 rounded-2" alt="" />
                    <h6>
                      <Link to={`/blogs/${item.slug}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))
            }
          </Col>
        </Row>
      </Container>
      </section>
    </Helmet>
  )
}

export default BlogDetails