import axios from 'axios';
const API_KEY = '1bacfa56e64e253020e94730ea309859';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeatherAction(city) {
  const url = `${ROOT_URL}&q=${city},ua`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
