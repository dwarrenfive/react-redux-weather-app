import axios from 'axios';


export function getWeather(city) {
    return {
        type: 'GET_WEATHER',
        payload: axios.get(`/search/${city}`)
    }
}

export function getCity() {
    return {
        type: 'GET_CITY',
        payload: {
            e
        }
    }
}
