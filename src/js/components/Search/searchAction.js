import axios from 'axios';


export function getWeather(city) {
    return {
        type: 'GET_WEATHER',
        payload: axios.get(`/search/${city}`)
    }
}

export function getCity(city) {
    return {
        type: 'GET_CITY',
        payload: { city }
    }
} 
