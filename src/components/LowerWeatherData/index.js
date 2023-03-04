import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export class LowerWeatherData extends Component {


    // className="lower-weather-class" 
    render() {
        let waveHeight = this.props.wave_height;
        let waveDirection = this.props.wave_direction;
        console.log("LowerWeatherData.waveHeight = " + waveHeight);
        return (
            <Container>
                <Row>
                    <Col>
                        Wave Height: {waveHeight}m
                        <br />
                        Wave Direction: {waveDirection}°
                    </Col>
                </Row>
            </Container>
        );
    }
}

