import Axios from 'axios';

export default function getWeather() {
    return {
        type: 'GET_WEATHER',
        payload: Axios.get('api.openweathermap.org/data/2.5/weather?q=London')
    }
}

export default function getError() {
    return {
        type: 'GET_ERROR',
        payload: {
            error: true
        }
    }
}
