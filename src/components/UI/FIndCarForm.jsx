import React from 'react'
import '../../styles/find-car-form.css'
import { Form, FormGroup } from 'reactstrap'

const FIndCarForm = () => {
  return (
   <Form className='form'>
    <div className='d-flex align-items-center justify-content-between flex-wrap'>
        <FormGroup className="form__group">
            <input type="text" placeholder="From Address" required />
        </FormGroup>
        <FormGroup className="form__group">
            <input type="text" placeholder="To Address" required />
        </FormGroup>
        <FormGroup className="form__group">
            <input type="date" placeholder="Journey Date" required />
        </FormGroup>
        <FormGroup className="form__group">
            <input className='journey__time' type="time" placeholder="Journey Time" required />
        </FormGroup>
        <FormGroup className="select__group">
            <select>
                <option value="">Select Car Type</option>
                <option value="ac">AC Car</option>
                <option value="non-ac">None AC Car</option>
            </select>
        </FormGroup>
        <FormGroup className="form__group">
           <button type="submit" className="btn find__car-btn">Find Car</button>
        </FormGroup>
    </div>
   </Form>

  )
}

export default FIndCarForm