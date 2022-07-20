import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/helmet/Helmet'
import { Container,Row,Col,Input,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/contact.css'

const contact_social = [
  {
    url: "#",
    icon: "ri-facebook-line"
  },
  {
    url: "#",
    icon: "ri-instagram-line"
  },
  {
    url: "#",
    icon: "ri-twitter-line"
  },
  {
    url: "#",
    icon: "ri-linkedin-line"
  },
  {
    url: "#",
    icon: "ri-youtube-line"
  }
]
const Contact = () => {
  return (
    <Helmet title="Contact">
    <CommonSection title="Contact" />
    <section>
      <Container>
        <Row>
          <Col lg="7" md="7">
            <h2 className="fw-bold mb-4">Get In Touch</h2>
            <Form>
              <FormGroup className='contat__form'>
                <Input placeholder='Your Name' type='text' />
              </FormGroup>
              <FormGroup className='contat__form'>
                <Input placeholder='Email' type='email' />
              </FormGroup>
              <FormGroup className='contat__form'>
               <textarea rows="5" placeholder='Message' className='textarea' ></textarea>
              </FormGroup>
              <button type='submit' className='contact__btn btn'>Send</button>
            </Form>
          </Col>
          <Col lg="5" md="5">
            <div className="contact__info">
              <h6 className='fw-bold'>Contact Information</h6>

              <p className="section__description">123, Dhanmondhi, Dhaka, Bangladesh</p>
              <div className="d-flex align-items-center gap-2">
                <h6 className='fs-6 mb-0'>Phone: </h6>
                <p className='section__description mb-0'>+880123456789</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <h6 className='fs-6 mb-0'>Email: </h6>
                <p className='section__description mb-0'>contact@example.com</p>
              </div>

              <h6 className='fw-bold'>Follow Us</h6>

              <div className="d-flex align-items-center gap-4 mt-3">
                {
                  contact_social.map((item, index) => (
                    <Link to={item.url} key={index} className="social__link-icon"><i className={item.icon}></i></Link>
                  ))
                }
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Contact