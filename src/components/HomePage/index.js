import { Component } from 'react';
import { NavBar } from "../NavBar";
import { UpperWeatherData } from "../UpperWeatherData";
import { LowerWeatherData } from "../LowerWeatherData";

export class HomePage extends Component {

    render() {
        console.log("Render HomePage");
        return (
            <div>
                <NavBar />
                <UpperWeatherData />
                <LowerWeatherData />
            </div>
        );
    }
}

