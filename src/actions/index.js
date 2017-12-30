import axios from 'axios';

const API_KEY='e0cd0b0d28eec5113bc2c16129f66e65';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// For compile-time check, create a variable.
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // get promise, call it as request.
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
