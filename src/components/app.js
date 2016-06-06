import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherDashboard from '../containers/weather-dashboard';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherDashboard />
      </div>
    );
  }
}
