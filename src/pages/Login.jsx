import React from 'react'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'
const Login = () => {
    const submithandler = event => {
        event.preventDefault()
    }
  return (
    <Helmet title="Login">
        <CommonSection title="Login" />
        <Container>
            <Row>
                <Col lg="3" md="3" sm="12"></Col>
                <Col lg="6" md="6" sm="12">
                    <Form onSubmit={submithandler}>
                        <FormGroup className='booking__form mb-4'>
                            <input type="email" placeholder='Email' />
                        </FormGroup>
                        <FormGroup className='booking__form mb-4'>
                            <input type="password" placeholder='Password' />
                        </FormGroup>
                        <FormGroup className='booking__form mb-4'>
                            <button type='submit' className='booking__form-btn'>Login</button>
                        </FormGroup>

                        <Link to="/forgot-password" className='forgot__link'>Forgot password?</Link>
                    </Form>
                </Col>
                <Col lg="3" md="3" sm="12"></Col>
            </Row>
        </Container>
        
    </Helmet>
  )
}

export default Login