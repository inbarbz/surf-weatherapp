import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { PlaceHolder } from "../PlaceHolder";

export class LowerWeatherData extends Component {

    render() {
        return (
            <Container className="lower-weather-class">
                <Row>
                    <Col>
                        <PlaceHolder label="LowerWeatherData" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

