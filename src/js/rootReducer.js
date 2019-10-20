import { combineReducers } from 'redux';
import SearchReducer from './components/Search/searchReducer';

const rootReducer = combineReducers({
    results: SearchReducer,
});

export default rootReducer;
