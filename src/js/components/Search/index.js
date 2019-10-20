import { connect } from "react-redux";
import { Search } from "./Search";

function mapStoreToProps(store) {
    return {
        city: console.log(store.city /*tbd*/)
    }
}

export default connect(mapStoreToProps)(Search);
