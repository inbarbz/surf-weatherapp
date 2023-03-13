import { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { NavBar } from "../NavBar";
import { UpperWeatherData } from "../UpperWeatherData";
import { LowerWeatherData } from "../LowerWeatherData";

export class HomePage extends Component {

    constructor() {
        super();
        this.state = { isLoaded: false };
    }

    componentDidMount() {
        let locationName = "Brighton";
        let latitude = this.locations[locationName].latitude;
        let longitude = this.locations[locationName].longitude;
        this.fetchSurfData(locationName);
        this.fetchUVIndex(latitude, longitude);
    }

    locations = {
        Brighton: { latitude: 50.83, longitude: -0.14 },
        OtherPlace: { latitude: 50.83, longitude: -0.14 }
    };

    fetchSurfData(locationName) {
        let latitude = this.locations[locationName].latitude;
        let longitude = this.locations[locationName].longitude;
        let url = `https://marine-api.open-meteo.com/v1/marine?timezone=GMT&hourly=wave_height,wave_direction,wind_wave_height,wind_wave_direction,swell_wave_height,swell_wave_direction&daily=wave_height_max,wave_direction_dominant,wind_wave_height_max,wind_wave_direction_dominant,swell_wave_height_max,swell_wave_direction_dominant&latitude=${latitude}&longitude=${longitude}`;
        console.log("fetching data from from marine-api...");
        console.log(url);
        fetch(url).then(res => {
            console.log("got response from marine-api!!!");
            let res_json = res.json();
            console.log("res_json = " + res_json);
            return res_json;
        })
            .then((result) => {
                console.log(result);
                this.setState({ isLoaded: true, daily: result.daily })
            })
    }

    fetchUVIndex(latitude, longitude) {
        let url = `https://api.open-meteo.com/v1/uv?latitude=${latitude}&longitude=${longitude}`;
        console.log("fetching UV index from api...");
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                this.setState({ uvIndex: result.value })
            })
    }

    getWaveHeight() {
        if (this.state.isLoaded) {
            console.log("this.state.daily.wave_height_max[0] is " + this.state.daily.wave_height_max[0]);
            return this.state.daily.wave_height_max[0];
        } else {
            return 0;
        }
    }

    getWaveDirection() {
        if (this.state.isLoaded) {
            return this.state.daily.wave_direction_dominant[0];
        } else {
            return 0;
        }
    }

    getUVIndex() {
        if (this.state.uvIndex !== undefined) {
            return this.state.uvIndex;
        } else {
            return "-";
        }
    }

    render() {
        console.log("Render HomePage");
        return (
            <Container className="home-page-background">
                <Row>
                    <Col>
                        <NavBar />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <UpperWeatherData uvIndex={this.getUVIndex()} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <LowerWeatherData wave_height={this.getWaveHeight()} wave_direction={this.getWaveDirection()} />
                    </Col>
                </Row>
            </Container >
        );
    }
}

