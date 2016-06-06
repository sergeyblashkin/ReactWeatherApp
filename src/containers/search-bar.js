import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherAction } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="input-group">
          <input
            className="form-control"
            placeholder="Forecast for your city"
            value={this.state.term}
            onChange={this.onInputChange}
          />
                    <span className="input-group-btn">
                        <button className="btn btn-secondary" type="submit">Go!</button>
                    </span>
        </div>
      </form>
    );
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeatherAction(this.state.term);
    this.setState({ term: ''});
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeatherAction}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
