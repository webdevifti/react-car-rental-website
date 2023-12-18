import React from 'react'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/register.css'
const Register = () => {
    const submithandler = event => {
        event.preventDefault()
    }
  return (
    <Helmet title="Registration">
    <CommonSection title="Registration" />
    <Container>
        <Row>
            <Col lg="3" md="3" sm="12"></Col>
            <Col lg="6" md="6" sm="12">
                <Form onSubmit={submithandler}>
                <FormGroup className='booking__form d-inline-block me-1 mb-4'>
                    <input type="text" placeholder='First Name' />
                </FormGroup>
                <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                    <input type="text" placeholder='Last Name' />
                </FormGroup>
                <FormGroup className='booking__form d-inline-block me-1 mb-4'>
                    <input type="email" placeholder='Email' />
                </FormGroup>
                <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                    <input type="number" placeholder='Phone Number' />
                </FormGroup>
                <FormGroup className='booking__form mb-4'>
                    <input type="password" placeholder='Password' />
                </FormGroup>
                <FormGroup className='booking__form mb-4'>
                    <button type='submit' className='booking__form-btn'>Register Now</button>
                </FormGroup>

                    Already Registered ? <Link to="/login" className='forgot__link'> Login Now</Link>
                </Form>
            </Col>
            <Col lg="3" md="3" sm="12"></Col>
        </Row>
    </Container>
</Helmet>
  )
}

export default Register