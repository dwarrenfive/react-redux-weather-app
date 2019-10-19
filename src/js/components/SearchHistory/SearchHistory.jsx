import React from 'react';

class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card mb-3'>
                <div className='card-header alert-primary'>Search History</div>
                <div className='card-body'>
                    <table className='table table-sm table-striped'>
                        <tbody>
                            <tr>
                                <td>San Diego</td>
                                <td style={{ width: 120 }}>Time 9:45am</td>
                            </tr>
                            <tr>
                                <td>New York</td>
                                <td style={{ width: 120 }}>Time 9:46am</td>
                            </tr>
                            <tr>
                                <td>Tokyo</td>
                                <td style={{ width: 120 }}>Time 9:47am</td>
                            </tr>
                            <tr>
                                <td>Washington D.C.</td>
                                <td style={{ width: 120 }}>Time 9:48am</td>
                            </tr>
                            <tr>
                                <td>London</td>
                                <td style={{ width: 120 }}>Time 9:49am</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default SearchHistory;
