import { connect } from "react-redux";
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
        weatherResults: store.results.locations
    }
}

export default connect(mapStoreToProps)(SearchHistory);
