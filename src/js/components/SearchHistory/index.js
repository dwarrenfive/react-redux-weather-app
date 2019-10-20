import { connect } from "react-redux";
import { SearchHistory } from "./SearchHistory";

function mapStoreToProps(store) {
    return {
        city: console.log(store.city /*tbd*/)
    }
}

export default connect(mapStoreToProps)(SearchHistory);
