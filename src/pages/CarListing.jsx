import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/helmet/Helmet'
import CarItem from '../components/UI/CarItem'
import carData from '../assets/data/carData'
const CarListing = () => {
  return (
    <Helmet title="Cars">
    <CommonSection title="Cars" />

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="d-flex align-items-center gap-3 mb-5">
              <span className="d-flex align-items-center gap-2">
                <i className='ri-sort-asc'></i> Sort By
              </span>

              <select name="" id="">
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
                <option value="asc">A to Z</option>
                <option value="desc">Z to A</option>
              </select>
            </div>
          </Col>
          {
            carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))
          }
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default CarListing