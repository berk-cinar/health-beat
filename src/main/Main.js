import React from 'react'
import Routing from '../Routing'
import Header from '../components/Header'
import {Row, Col} from "react-bootstrap"
import "../App.css";

function Main() {
  return (
    <div>
        <Header/>
        <Row className='row'>
              <Col sm={3} className="first"></Col>
              <Col sm={6}>  <Routing/> </Col>
             <Col sm={3} className="third"></Col>
        </Row>

    </div>
  )
}
export default Main