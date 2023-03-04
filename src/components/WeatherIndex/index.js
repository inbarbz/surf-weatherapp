import { Component } from 'react';
import { Container } from 'react-bootstrap';

export class WeatherIndex extends Component {

    render() {
        let index = this.props.index;
        return (
            <Container style={{ fontSize: "50px" }}>
                {index}%
            </Container>
        );
    }
}

