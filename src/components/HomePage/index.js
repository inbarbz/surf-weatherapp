import { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { NavBar } from "../NavBar";
import { UpperWeatherData } from "../UpperWeatherData";
import { LowerWeatherData } from "../LowerWeatherData";

export class HomePage extends Component {

    styles = {

    }

    render() {
        console.log("Render HomePage");
        return (
            <Container>
                <Row>
                    <Col>
                        <NavBar />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <UpperWeatherData />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <LowerWeatherData />
                    </Col>
                </Row>
            </Container >
        );
    }
}

