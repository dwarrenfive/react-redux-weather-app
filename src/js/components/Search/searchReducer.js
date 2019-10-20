const defaultStore = {
    city: []
};

export default function Search(state = defaultStore, action) {
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
