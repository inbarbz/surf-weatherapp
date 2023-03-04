import { Component } from 'react';

export class PlaceHolder extends Component {

    render() {
        let label = this.props.label;
        return (
            <div style={this.divStyles}>
                Place Holder for: {label}
            </div>
        );
    }

    divStyles = {
        boder: "solid",
        borderWidth: "2px"
    }
}
