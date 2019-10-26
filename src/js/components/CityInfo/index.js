import { connect } from "react-redux";
import CityInfo from "./CityInfo";

function mapStoreToProps(store) {
    return {
        name: store.search.name,
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

export default connect(mapStoreToProps)(CityInfo);
