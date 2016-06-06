import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherDashboard extends Component {

  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);

    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>
          <Sparklines width={200} height={120} data={temps}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>{cityData.list[0].main.pressure}</td>
        <td>{cityData.list[0].main.humidity}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
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
