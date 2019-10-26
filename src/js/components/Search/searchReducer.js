const defaultStore = {
    city: '',
    temp: '',
    pressure: '',
    humidity: '',
    lowestTemp: '',
    highestTemp: '',
    windSpeed: '',
    lon: '',
    lat: '',
    icon: '04n',
    history: []
};

export default function searchReducer(state = defaultStore, action) {
    const { type, payload } = action;
    switch (type) {
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                city: payload.data.name,
                temp: payload.data.main.temp,
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                lowestTemp: payload.data.main.temp_min,
                highestTemp: payload.data.main.temp_max,
                windSpeed: payload.data.wind.speed,
                lat: payload.data.coord.lat,
                lon: payload.data.coord.lon,
                icon: payload.data.weather[0].icon,
                history: [
                    ...state.history,
                    {
                        city: payload.data.name
                    }
                ]
            }
        }

        case 'GET_CITY': {
            return {
                ...state,
                city: payload.city
            }
        }

        default: {
            return state;
        }
    }
}
