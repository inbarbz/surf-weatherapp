import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { PlaceHolder } from "../PlaceHolder";

export class UpperWeatherData extends Component {

    render() {
        return (
            <Container className="upper-weather-class">
                <Row>
                    <Col>
                        <PlaceHolder label="UpperWeatherData" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

