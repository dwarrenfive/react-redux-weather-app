import { connect } from "react-redux";
import CityInfo from "./CityInfo";

function mapStoreToProps(store) {
    return {
        city: console.log(store.city /*tbd*/)
    }
}

export default connect(mapStoreToProps)(CityInfo);
