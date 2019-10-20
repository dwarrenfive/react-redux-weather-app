import { combineReducers } from 'redux';
import cityInfoReducer from './components/CityInfo/cityInfoReducer';
import searchHistoryReducer from './components/SearchHistory/searchHistoryReducer';

const rootReducer = combineReducers({
    cityInfo: cityInfoReducer,
    searchHistory: searchHistoryReducer
});

export default rootReducer;
