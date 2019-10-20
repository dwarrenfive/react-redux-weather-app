const defaultStore = {
    city: '',
    temperature: '',
    pressure: '',
    humidity: '',
    lowestTemp: '',
    highestTemp: '',
    windSpeed: '',
    error: false,
    locations: []
};

export default function Search(state = defaultStore, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_WEATHER': {
            const { city, temperature, pressure, humidity, lowestTemp, highestTemp, windSpeed, error } = action.payload;
            return {
                ...state,
                locations: [
                    ...state.locations,
                    { city, temperature, pressure, humidity, lowestTemp, highestTemp, windSpeed, error }
                ]
            }
        }

        case 'GET_ERROR': {
            return {
                error: payload.error
            }
        }

        default: {
            return state;
        }
    }
}
