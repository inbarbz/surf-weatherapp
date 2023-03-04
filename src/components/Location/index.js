import { Component } from 'react';
import { Container } from 'react-bootstrap';

export class Location extends Component {


    render() {
        let location = this.props.location;
        return (
            <Container style={{ fontSize: "30px" }}>
                {location}
            </Container>
        );
    }
}

