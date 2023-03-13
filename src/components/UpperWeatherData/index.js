import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Location } from "../Location";
import { WeatherIndex } from "../WeatherIndex";

export class UpperWeatherData extends Component {
    //className="upper-weather-class"
    render() {
        return (
            <Container>
                <Row>
                    <Col style={{ textAlign: "center", marginTop: "80px" }}>
                        <Location location="Brighton Beach" />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: "center", marginTop: "5px" }}>
                        <WeatherIndex index="30" />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: "center", marginTop: "5px" }}>
                        <WeatherIndex index={this.props.uvIndex} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

