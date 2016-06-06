import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weather-chart';

class WeatherDashboard extends Component {

    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td><WeatherChart width={180} height={120} data={temps} color="orange"/></td>
                <td><WeatherChart width={180} height={120} data={pressures} color="green"/></td>
                <td><WeatherChart width={180} height={120} data={humidities} color="blue"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover weather-table">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

}

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherDashboard);
