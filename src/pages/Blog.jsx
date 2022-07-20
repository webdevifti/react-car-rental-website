import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import BlogList from '../components/UI/BlogList'



const Blog = () => {
  return (
    <Helmet title="Blog">
    <CommonSection title="Blog" />
    <section>
      <Container>
        <Row>
          <BlogList />
          <BlogList />
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Blog