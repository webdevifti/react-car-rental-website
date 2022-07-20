import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/helmet/Helmet'
import AboutSection from '../components/UI/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import driveImg from '../assets/all-images/drive.jpg'
import OurMember from '../components/UI/OurMember'
import '../styles/about.css'
const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage"/>

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className='about__page-img'>
              <img src={driveImg} alt="" className='w-100 rounded-3' />
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className='section__title'>We are committed to provide safe ride solutions</h2>
                <p className='section__description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, fuga temporibus? Ullam eos, dolor numquam blanditiis similique consectetur quod suscipit explicabo magnam aperiam unde ipsam odit hic! Nisi neque officia illo, saepe error suscipit nostrum vel perferendis recusandae nulla fugit?</p>
                <p className='section__description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia sit aut recusandae! Repellendus nisi velit cum doloremque, soluta molestiae accusantium culpa saepe quidem aperiam voluptates delectus quae expedita et.</p>

                <div className='d-flex align-items-center gap-3 mt-4'>
                  <span><i className="ri-phone-line"></i></span>
                  <div className=''>
                    <h6 className='section__subtitle'>Need any help? </h6>
                    <h4>+880123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5 text-center'>
              <h6 className="section__subtitle">Experts</h6>
              <h2 className='section__title'>Our Member</h2>
            </Col>
            <OurMember />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default About