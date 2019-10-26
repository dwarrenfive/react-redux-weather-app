import { connect } from "react-redux";
import Search from "./Search";

function mapStoreToProps(store) {
    return {
        city: store.search.city,
        temp: store.search.temp,
        pressure: store.search.pressure,
        humidity: store.search.humidity,
        lowestTemp: store.search.lowestTemp,
        highestTemp: store.search.highestTemp,
        windSpeed: store.search.windSpeed,
        lat: store.search.lat,
        lon: store.search.lon
    }
}

export default connect(mapStoreToProps)(Search); 
