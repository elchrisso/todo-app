import React, { Component } from 'react'

import { Row, Col, Button } from 'reactstrap'

class TodoAdd extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col/>
        </Row>
        <Row>
          <Col/><Col/>
        </Row>
        <Row>
          <Col>
            <Button>Add Todo</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TodoAdd