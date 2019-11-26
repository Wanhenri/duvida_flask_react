import React from 'react';

import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const HeaderDays = (props) => {

    return (
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to addtional content.</CardText>
              <Button>Go Somewhere</Button>
            </Card>
          </Col>
        </Row>
    )
};

export default HeaderDays;