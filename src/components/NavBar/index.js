import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { SlLocationPin } from 'react-icons/sl';
import { HiOutlineHome } from 'react-icons/hi';

export class NavBar extends Component {


    render() {
        return (
            <Container className="navbar-class">
                <Row style={{ padding: "0px", margin: "0px" }}>
                    <Col xs={2}> <HiOutlineHome style={{ marginTop: "30px", marginLeft: "30px" }} /> </Col>
                    <Col xs={8}>  </Col>
                    <Col xs={2}> <SlLocationPin style={{ marginTop: "30px", marginRight: "10px", alignContent: "right" }} /> </Col>
                </Row>
            </Container>
        );
    }
}

