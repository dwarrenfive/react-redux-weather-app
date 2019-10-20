const defaultState = {
    city: []
};

export default function CityInfo(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_WEATHER': {
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
